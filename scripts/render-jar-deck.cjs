const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const CHROME_PATH = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
  ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  : 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function extractJarDeck() {
  console.log('Launching browser from:', CHROME_PATH);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--allow-file-access-from-files', '--no-sandbox', '--disable-web-security']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
        <style>
          body { margin: 0; padding: 0; background: #ffffff; }
          canvas { display: block; }
        </style>
      </head>
      <body>
        <canvas id="pdf-canvas"></canvas>
      </body>
    </html>
  `;

  await page.setContent(htmlContent, { waitUntil: 'domcontentloaded' });

  const pdfPath = path.resolve(__dirname, '../public/decks/jar.pdf');
  const outDir = path.resolve(__dirname, '../public/decks/jar');

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const pdfBase64 = fs.readFileSync(pdfPath).toString('base64');
  console.log(`Processing ${path.basename(pdfPath)}...`);

  const numPages = await page.evaluate(async (base64) => {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    const binaryString = window.atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    window.__pdfDoc = await pdfjsLib.getDocument({ data: bytes }).promise;
    return window.__pdfDoc.numPages;
  }, pdfBase64);

  console.log(`  Found ${numPages} slides.`);

  for (let i = 1; i <= numPages; i++) {
    const { width, height } = await page.evaluate(async (pageNum) => {
      const page = await window.__pdfDoc.getPage(pageNum);
      const unscaledViewport = page.getViewport({ scale: 1.0 });
      const scale = 1920 / unscaledViewport.width;
      const viewport = page.getViewport({ scale });

      const canvas = document.getElementById('pdf-canvas');
      canvas.width = Math.floor(viewport.width);
      canvas.height = Math.floor(viewport.height);

      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      await page.render({ canvasContext: ctx, viewport }).promise;
      return { width: canvas.width, height: canvas.height };
    }, i);

    await page.setViewport({ width, height, deviceScaleFactor: 1 });
    const canvasElement = await page.$('#pdf-canvas');
    const pageNumStr = String(i).padStart(2, '0');
    const outPath = path.join(outDir, `slide-${pageNumStr}.png`);

    await canvasElement.screenshot({ path: outPath, type: 'png' });
    console.log(`  ✓ Saved slide-${pageNumStr}.png (${width}x${height})`);
  }

  await browser.close();
  console.log('\n🎉 ALL JAR SLIDES EXTRACTED AS CRYSTAL CLEAR 1920x1080 IMAGES!');
}

extractJarDeck().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
