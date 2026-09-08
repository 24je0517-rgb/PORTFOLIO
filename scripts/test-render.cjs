const fs = require('fs');
const path = require('path');
const { createCanvas } = require('@napi-rs/canvas');
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');

async function test() {
  const pdfPath = path.join(__dirname, '../public/decks/credit-planner.pdf');
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await pdfjsLib.getDocument({ data, isEvalSupported: false, useSystemFonts: true }).promise;
  console.log('Pages:', doc.numPages);
  const page = await doc.getPage(1);
  const viewport = page.getViewport({ scale: 1.5 });
  const canvas = createCanvas(Math.floor(viewport.width), Math.floor(viewport.height));
  const ctx = canvas.getContext('2d');
  
  const renderContext = {
    canvasContext: ctx,
    viewport: viewport,
    canvasFactory: {
      create(w, h) {
        const c = createCanvas(w, h);
        return { canvas: c, context: c.getContext('2d') };
      },
      reset(cc, w, h) {
        // do not mutate cc.canvas.width to 0
      },
      destroy(cc) {
        // do nothing
      }
    }
  };

  await page.render(renderContext).promise;
  const buf = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(__dirname, '../public/decks/test-slide.png'), buf);
  console.log('Successfully rendered test-slide.png! Size:', buf.length);
}

test().catch(console.error);
