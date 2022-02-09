const fs = require('fs');

const fs_promise = require('fs').promises;

const puppeteer = require("puppeteer");

const minimal_args = [
    '--autoplay-policy=user-gesture-required',
    '--disable-background-networking',
    '--disable-background-timer-throttling',
    '--disable-backgrounding-occluded-windows',
    '--disable-breakpad',
    '--disable-client-side-phishing-detection',
    '--disable-component-update',
    '--disable-default-apps',
    '--disable-dev-shm-usage',
    '--disable-domain-reliability',
    '--disable-extensions',
    '--disable-features=AudioServiceOutOfProcess',
    '--disable-hang-monitor',
    '--disable-ipc-flooding-protection',
    '--disable-notifications',
    '--disable-offer-store-unmasked-wallet-cards',
    '--disable-popup-blocking',
    '--disable-print-preview',
    '--disable-prompt-on-repost',
    '--disable-renderer-backgrounding',
    '--disable-setuid-sandbox',
    '--disable-speech-api',
    '--disable-sync',
    '--hide-scrollbars',
    '--ignore-gpu-blacklist',
    '--metrics-recording-only',
    '--mute-audio',
    '--no-default-browser-check',
    '--no-first-run',
    '--no-pings',
    '--no-sandbox',
    '--no-zygote',
    '--password-store=basic',
    '--use-gl=swiftshader',
    '--use-mock-keychain',
  ];

async function scrapeRunes(args,err){
  if (err){
    console.error(err);
    return;
}
else{
const browser = await puppeteer.launch({
    headless: true,
    args: minimal_args
  });
const page = await browser.newPage();
console.log('Opening website...');
await page.goto('https://na.op.gg/champions/'+ args + '/build');
console.log('Opened website successfully');

await page.waitForSelector('#__next > div.css-14qch48.e47k4l21 > div.main > table.css-80j10c.e10jawsm1 > tbody:nth-child(5) > tr:nth-child(1) > td:nth-child(1) > div');          
const element = await page.$('#__next > div.css-14qch48.e47k4l21 > div.main > table.css-80j10c.e10jawsm1 > tbody:nth-child(5) > tr:nth-child(1) > td:nth-child(1) > div');        
await element.screenshot({path: 'Images/' + (args +'runes.png')}); 

browser.close();

//return (args[0] +' runes.png');

}
}

var namesText = fs.readFileSync('champNames.txt', 'utf8' , (err, data) => {
    if (err){
        console.error(err);
        return;
    }
    return(data);
})

var names = namesText.split("\n");


async function scrape(args) {
  console.log(1);
  await scrapeRunes(args);
  await sleep(30000);
  console.log(2);
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}


//for (let i = 150; i < names.length ; i++) {
/*  console.log('Starting ahri');
  scrapeRunes('ahri');
  console.log('Finished ahri');
  init();
  console.log('starting irelia');
  scrapeRunes('irelia');
  
  */
 scrapeRunes('skarner');
//}

// node scrapeRunes.js