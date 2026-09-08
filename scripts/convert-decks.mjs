import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pdfImgConvert from 'pdf-img-convert';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function convertPdf(pdfPath, outputDir, prefix = 'slide-') {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`Converting ${path.basename(pdfPath)}...`);
  const outputImages = await pdfImgConvert.convert(pdfPath, {
    width: 1920,
    page_numbers: undefined
  });

  console.log(`  Extracted ${outputImages.length} slides.`);

  for (let i = 0; i < outputImages.length; i++) {
    const pageNumStr = String(i + 1).padStart(2, '0');
    const outputPath = path.join(outputDir, `${prefix}${pageNumStr}.png`);
    fs.writeFileSync(outputPath, outputImages[i]);
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
      await convertPdf(d.pdf, d.out);
    } else {
      console.error(`Missing PDF: ${d.pdf}`);
    }
  }

  console.log('All slides converted to high-res PNG successfully!');
}

main().catch(err => {
  console.error('Conversion failed:', err);
  process.exit(1);
});
