const { Channel } = require("discord.js")

const puppeteer = require("puppeteer");

async function scrapeTime(url){
const browser = await puppeteer.launch({
    headless: true,
    args: minimal_args
  });
const page = await browser.newPage();
console.log('Opening website...');
try{
  await page.goto(url);
  console.log('Opened website successfully');
}
catch(e)
{
  console.log('Couldnt open website')
  return "Timed out, please try again later";
  break;
}

const [el] = await page.$x('//*[@id="time-days"]/p');
const txt = await el.getProperty('textContent');
const rawTxt = await txt.jsonValue();

console.log(rawTxt);

return rawTxt;


browser.close();

}

module.exports = {
    name : "timespent",
    description : "Shows amount of time spent playing league of legends",
    execute(message, args){
        console.log(args);
        scrapeTime('https://wol.gg/stats/euw/' + args[0] + "/").then(result => message.channel.send(args[0] + " has spent " + result + " on League Of Legends!"));
        // https://wol.gg/stats/euw/"summoner name"/
        //message.channel.send(args[0] + " has spent " + result + " on League Of Legends");
    }
}

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
  