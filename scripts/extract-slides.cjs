const fs = require('fs');
const path = require('path');
const { createCanvas } = require('@napi-rs/canvas');
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');

class NodeCanvasFactory {
  create(width, height) {
    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');
    return {
      canvas,
      context,
    };
  }

  reset(canvasAndContext, width, height) {
    canvasAndContext.canvas.width = width;
    canvasAndContext.canvas.height = height;
  }

  destroy(canvasAndContext) {
    canvasAndContext.canvas = null;
    canvasAndContext.context = null;
  }
}

async function renderPdfToImages(pdfPath, outputDir, prefix = 'slide-') {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const loadingTask = pdfjsLib.getDocument({ data });
  const pdfDoc = await loadingTask.promise;
  const canvasFactory = new NodeCanvasFactory();

  console.log(`Processing ${path.basename(pdfPath)}: ${pdfDoc.numPages} pages...`);

  for (let i = 1; i <= pdfDoc.numPages; i++) {
    const page = await pdfDoc.getPage(i);
    const unscaledViewport = page.getViewport({ scale: 1.0 });
    
    // Render at crisp width of 1920
    const scale = 1920 / unscaledViewport.width;
    const viewport = page.getViewport({ scale });

    const canvasAndContext = canvasFactory.create(viewport.width, viewport.height);
    const ctx = canvasAndContext.context;

    // Fill white background in case of transparent PDF canvas
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, viewport.width, viewport.height);

    const renderContext = {
      canvasContext: ctx,
      viewport: viewport,
      canvasFactory: canvasFactory
    };

    await page.render(renderContext).promise;

    const buffer = canvasAndContext.canvas.toBuffer('image/png');
    const pageNumStr = String(i).padStart(2, '0');
    const outputPath = path.join(outputDir, `${prefix}${pageNumStr}.png`);
    fs.writeFileSync(outputPath, buffer);
    console.log(`  Saved ${outputPath}`);
  }
}

async function main() {
  const decks = [
    {
      pdf: path.join(__dirname, '../public/decks/credit-planner.pdf'),
      out: path.join(__dirname, '../public/decks/credit-planner')
    },
    {
      pdf: path.join(__dirname, '../public/decks/shasang-ai.pdf'),
      out: path.join(__dirname, '../public/decks/shasang-ai')
    },
    {
      pdf: path.join(__dirname, '../public/decks/dattansh.pdf'),
      out: path.join(__dirname, '../public/decks/dattansh')
    }
  ];

  for (const d of decks) {
    if (fs.existsSync(d.pdf)) {
      await renderPdfToImages(d.pdf, d.out);
    } else {
      console.error(`Missing PDF: ${d.pdf}`);
    }
  }
  console.log('All slides extracted successfully!');
}

main().catch(err => {
  console.error('Extraction failed:', err);
  process.exit(1);
});
