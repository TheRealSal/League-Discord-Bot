module.exports = {
    name: 'help',
    description: "This is a help command, which displays all the commands available and how to use them",
    execute(message,args){
        message.channel.send('Commands available: \n' + 
                            '   -runes "champion name"  etc. -runes ahri\n' +
                            '   -timespent "summoner name" "server abbrevitation' + 
                            '   etc. -timespent loltyler1 euw');
    }
}