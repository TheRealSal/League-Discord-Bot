
const Discord = require('discord.js');

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('LeagueBot is ready!');
} )

// Message handler
client.on('messageCreate', message => {
    if(!message.content.startsWith(prefix) || message.author.bot)    return;

    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message,args);
    }
    else if(command === 'timespent'){
        client.commands.get('timespent').execute(message,args);
    }
    else if(command === 'runes'){
        client.commands.get('runes').execute(message,args, Discord);
    }
    else if(command === 'help'){
        client.commands.get('help').execute(message,args);
    }
});

client.login(process.env.Token);