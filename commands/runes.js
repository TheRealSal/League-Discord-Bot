const { Channel} = require("discord.js")

module.exports = {
    name : "runes",
    description : "Shows runes for champion selected",
    execute(message, args, Discord){
        const lower_name = args[0].toLowerCase();

        const name = lower_name.charAt(0).toUpperCase() + lower_name.slice(1);

        // Sends the message to the discord channel
        const runes_embed = new Discord.MessageEmbed()
        .setImage('https://raw.githubusercontent.com/TheRealSal/ScraperImages/main/'+ name +'runes.png');
        console.log('https://raw.githubusercontent.com/TheRealSal/ScraperImages/main/'+ name +'runes.png')
        message.channel.send({ embeds: [runes_embed] });
            
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