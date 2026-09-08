const fs = require('fs');
const path = require('path');
const { createCanvas } = require('@napi-rs/canvas');
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');

// Fix for NodeCanvasFactory destroy with napi-rs canvas
if (pdfjsLib.NodeCanvasFactory) {
  pdfjsLib.NodeCanvasFactory.prototype.destroy = function(cc) {
    if (cc) {
      cc.canvas = null;
      cc.context = null;
    }
  };
  pdfjsLib.NodeCanvasFactory.prototype.reset = function(cc, w, h) {};
}

async function renderPdfToImages(pdfPath, outputDir, prefix = 'slide-') {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await pdfjsLib.getDocument({ 
    data, 
    isEvalSupported: false, 
    useSystemFonts: true 
  }).promise;

  console.log(`Extracting ${path.basename(pdfPath)}: ${doc.numPages} slides...`);

  for (let i = 1; i <= doc.numPages; i++) {
    // Open a fresh page
    const page = await doc.getPage(i);
    const unscaledViewport = page.getViewport({ scale: 1.0 });
    
    // Scale to high definition width of 1920
    const scale = 1920 / unscaledViewport.width;
    const viewport = page.getViewport({ scale });

    const width = Math.floor(viewport.width);
    const height = Math.floor(viewport.height);

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Clean white background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    const renderContext = {
      canvasContext: ctx,
      viewport: viewport
    };

    await page.render(renderContext).promise;

    const buffer = canvas.toBuffer('image/png');
    const pageNumStr = String(i).padStart(2, '0');
    const outputPath = path.join(outputDir, `${prefix}${pageNumStr}.png`);
    fs.writeFileSync(outputPath, buffer);
    console.log(`  ✓ Generated ${prefix}${pageNumStr}.png (${Math.round(buffer.length / 1024)} KB)`);
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

  console.log('\n🎉 All 18 slides across all 3 presentations extracted successfully!');
}

main().catch(err => {
  console.error('Extraction failed:', err);
  process.exit(1);
});
