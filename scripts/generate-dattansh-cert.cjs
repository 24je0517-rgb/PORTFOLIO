const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const CHROME_PATH = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
  ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  : 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function generateDattanshCert() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 2400, height: 1700, deviceScaleFactor: 1 });

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', -apple-system, Roboto, sans-serif; }
        body { width: 2400px; height: 1700px; background: #ffffff; display: flex; align-items: center; justify-content: center; padding: 60px; }
        .cert-container {
          width: 100%;
          height: 100%;
          border: 12px solid #1e293b;
          outline: 4px solid #6366f1;
          outline-offset: -20px;
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 100px 120px;
          position: relative;
        }
        .cert-badge {
          position: absolute;
          top: 70px;
          right: 90px;
          background: #6366f1;
          color: white;
          padding: 16px 36px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 26px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .header { text-align: center; }
        .org { font-size: 32px; font-weight: 700; color: #64748b; letter-spacing: 6px; text-transform: uppercase; margin-bottom: 20px; }
        .title { font-size: 72px; font-weight: 900; color: #0f172a; letter-spacing: 2px; margin-bottom: 30px; }
        .subtitle { font-size: 30px; color: #475569; }
        .recipient-name { font-size: 68px; font-weight: 900; color: #1e1b4b; border-bottom: 4px solid #6366f1; padding-bottom: 12px; margin: 30px 0; display: inline-block; }
        .body-text { font-size: 32px; color: #334155; line-height: 1.6; text-align: center; max-width: 1700px; }
        .footer { width: 100%; display: flex; justify-content: space-between; align-items: flex-end; padding-top: 50px; border-top: 2px solid #e2e8f0; }
        .footer-item { text-align: center; }
        .sig-line { width: 350px; border-top: 3px solid #334155; margin-bottom: 12px; }
        .footer-text { font-size: 24px; color: #64748b; font-weight: 600; }
      </style>
    </head>
    <body>
      <div class="cert-container">
        <div class="cert-badge">Verified Analysis</div>
        <div class="header">
          <div class="org">IIT (ISM) Dhanbad • Data Analytics Initiative</div>
          <h1 class="title">Certificate of Analytics Excellence</h1>
          <p class="subtitle">This is proudly presented to</p>
          <div class="recipient-name">Rajat Sarkar</div>
        </div>
        <div class="body-text">
          for outstanding research, comprehensive econometric modelling, and longitudinal analysis on<br>
          <strong style="color: #0f172a;">“50+ Years of India’s Rice Economy: Yield, MSP, and 2026–27 Forecasts”</strong><br>
          demonstrating high proficiency in agricultural econometrics, CAGR decomposition, and supply-risk mitigation strategy.
        </div>
        <div class="footer">
          <div class="footer-item">
            <div class="sig-line"></div>
            <div class="footer-text">Dattansh Analytics Challenge</div>
          </div>
          <div class="footer-item">
            <div class="sig-line"></div>
            <div class="footer-text">Verified Project Submission</div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  await page.setContent(html);
  const outPath = path.resolve(__dirname, '../public/certificates/dattansh.png');
  await page.screenshot({ path: outPath, type: 'png' });
  await browser.close();
  console.log('Saved Dattansh certificate to:', outPath);
}

generateDattanshCert().catch(console.error);
