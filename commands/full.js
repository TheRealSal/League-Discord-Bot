const { Channel } = require("discord.js")

module.exports = {
    name : "full",
    description : "Shows champion tier list",
    execute(message, args){
        console.log(args);
        message.channel.send('https://euw.op.gg/champion/statistics');
    }
}