const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const CHROME_PATH = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
  ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  : 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function renderCertificates() {
  console.log('Launching browser from:', CHROME_PATH);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--allow-file-access-from-files', '--no-sandbox', '--disable-web-security']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 2400, height: 1700, deviceScaleFactor: 1 });

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

  const certs = [
    {
      name: 'credit-planner',
      src: 'C:\\Users\\RAJAT SARKAR\\.gemini\\antigravity\\brain\\f3b1f158-1cc9-46c9-b77d-d6be148fdd39\\.user_uploaded\\media_1789829861604.pdf',
      dest: path.resolve(__dirname, '../public/certificates/credit-planner.png')
    },
    {
      name: 'shasang-ai',
      src: 'C:\\Users\\RAJAT SARKAR\\.gemini\\antigravity\\brain\\f3b1f158-1cc9-46c9-b77d-d6be148fdd39\\.user_uploaded\\media_1789829877701.pdf',
      dest: path.resolve(__dirname, '../public/certificates/shasang-ai.png')
    }
  ];

  for (const cert of certs) {
    if (!fs.existsSync(cert.src)) {
      console.error('File not found:', cert.src);
      continue;
    }

    console.log(`Processing certificate: ${cert.name}...`);
    const pdfBase64 = fs.readFileSync(cert.src).toString('base64');

    await page.evaluate(async (base64) => {
      const binaryString = window.atob(base64);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      window.__pdfDoc = await pdfjsLib.getDocument({ data: bytes }).promise;
    }, pdfBase64);

    await page.evaluate(async () => {
      const page = await window.__pdfDoc.getPage(1);
      const unscaledViewport = page.getViewport({ scale: 1.0 });
      const targetWidth = 2400;
      const scale = targetWidth / unscaledViewport.width;
      const viewport = page.getViewport({ scale });

      const canvas = document.getElementById('pdf-canvas');
      canvas.width = Math.floor(viewport.width);
      canvas.height = Math.floor(viewport.height);

      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      await page.render({ canvasContext: ctx, viewport }).promise;
    });

    const canvasElement = await page.$('#pdf-canvas');
    await canvasElement.screenshot({ path: cert.dest, type: 'png' });
    console.log(`Saved certificate to: ${cert.dest}`);
  }

  await browser.close();
  console.log('All certificates successfully rendered!');
}

renderCertificates().catch(err => {
  console.error('Fatal error rendering certificates:', err);
  process.exit(1);
});
