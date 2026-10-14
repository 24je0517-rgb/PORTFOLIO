Add-Type -AssemblyName System.Runtime.WindowsRuntime
$methods = [System.WindowsRuntimeSystemExtensions].GetMethods()
$asTaskGeneric = ($methods | Where-Object { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1' })[0]
$asTaskAction = ($methods | Where-Object { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncAction' })[0]

function AwaitOperation($WinRtTask, $ResultType) {
    $asTask = $asTaskGeneric.MakeGenericMethod($ResultType)
    $netTask = $asTask.Invoke($null, @($WinRtTask))
    $netTask.Wait(-1) | Out-Null
    return $netTask.Result
}

function AwaitAction($WinRtAction) {
    $netTask = $asTaskAction.Invoke($null, @($WinRtAction))
    $netTask.Wait(-1) | Out-Null
}

[Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null
[Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType = WindowsRuntime] | Out-Null

$pdfFullPath = (Resolve-Path 'public\decks\ascend.pdf').Path
$fileOp = [Windows.Storage.StorageFile]::GetFileFromPathAsync($pdfFullPath)
$file = AwaitOperation $fileOp ([Windows.Storage.StorageFile])

$docOp = [Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($file)
$doc = AwaitOperation $docOp ([Windows.Data.Pdf.PdfDocument])

Write-Host "Ascend PDF loaded! Total pages: $($doc.PageCount)"

$outDir = (Resolve-Path 'public\decks').Path + "\ascend"
if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir | Out-Null
}

for ($i = 0; $i -lt $doc.PageCount; $i++) {
    $page = $doc.GetPage($i)
    $slideNum = "{0:D2}" -f ($i + 1)
    $destFile = Join-Path $outDir "slide-$slideNum.png"
    
    $outFileOp = [Windows.Storage.StorageFolder]::GetFolderFromPathAsync($outDir)
    $folder = AwaitOperation $outFileOp ([Windows.Storage.StorageFolder])
    
    $createFileOp = $folder.CreateFileAsync("slide-$slideNum.png", [Windows.Storage.CreationCollisionOption]::ReplaceExisting)
    $storageFile = AwaitOperation $createFileOp ([Windows.Storage.StorageFile])
    
    $streamOp = $storageFile.OpenAsync([Windows.Storage.FileAccessMode]::ReadWrite)
    $stream = AwaitOperation $streamOp ([Windows.Storage.Streams.IRandomAccessStream])
    
    [Windows.Data.Pdf.PdfPageRenderOptions, Windows.Data.Pdf, ContentType = WindowsRuntime] | Out-Null
    $renderOptions = New-Object Windows.Data.Pdf.PdfPageRenderOptions
    $renderOptions.DestinationWidth = 1920
    
    $renderOp = $page.RenderToStreamAsync($stream, $renderOptions)
    AwaitAction $renderOp
    
    $flushOp = $stream.FlushAsync()
    AwaitOperation $flushOp ([bool]) | Out-Null
    $stream.Dispose()
    
    Write-Host "Rendered slide-$slideNum.png (width 1920)"
}

Write-Host "All slides rendered successfully!"
