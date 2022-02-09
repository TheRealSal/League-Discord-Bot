const fs = require('fs').promises;

const puppeteer = require("puppeteer");

async function scrapeNames(url)
{
const browser = await puppeteer.launch(
    {
        headless: true,
    });
const page = await browser.newPage();
console.log('Opening website...');
await page.goto(url);
console.log('Opened website successfully');

const names = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.champion-index__champion-item__name')).map(x => x.textContent);
});
await fs.writeFile("champNames.txt", names.join("\n") );

browser.close();
}

scrapeNames('https://na.op.gg/champion/statistics');

// node scrapeNames.js