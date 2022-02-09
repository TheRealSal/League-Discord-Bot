const Discord = require('discord.js');

const client = new Discord.Client();

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
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot)    return;

    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message,args);
    }
    else if(command === 'full'){
        client.commands.get('champs').execute(message,args);
    }
    else if(command === 'timespent'){
        client.commands.get('timespent').execute(message,args);
    }
    else if(command === 'runes'){
        client.commands.get('runes').execute(message,args, Discord);
    }
});

client.login('//Token');