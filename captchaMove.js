const puppeteer = require('puppeteer');
// 1. Open the Browser using puppeteer
const url = 'http://someonesomethingcpt.quickwebchecker.com/gv2.php';
(async () => {
    // 2. Open the Targetted captcha webpage in the chromium automated browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({ path: 'captcha.png' });
    await browser.close();
}
)

// 3. After the webpage requested I need to collect the request Header received 