# League-Discord-Bot

This is a discord bot to facilitate access to league of legends information. 

Features:
  * Access time spent on League of Legends using information on wol.gg
  * Access runes for each champion using information scraped from op.gg
  
  
Installation:
  1. Clone file and run npm install -y
                        npm install puppeteer
                        npm install discord.js
 
  2. Open https://discord.com/developers/applications , create a new application and copy token
  3. Paste token at bottom of main.js
  4. Add the bot to your server
  5. In the terminal, run node . , if it does not work, run node main.js
  6. Congratulations, the bot should be active!


How I made it:
 1. Created main.js to interact with the discord api and handle messages and commands given in the channel.
 2. Created scrapenames.js to scrape the name of each champion and used the fs library to write them into the champNames.txt file.
 3. Created scrapeRunes.js to scrape the div element on op.gg/champions containing the runes and used puppeteer's screenshot feature to save the image to a folder  on my computer.
 4. Uploaded all the images scraped by using scrapeRunes on each element in champNames.txt onto [a github repository](https://github.com/TheRealSal/ScraperImages) to store the images
 5. Used the discord api's MessageEmbed feature to send the image of the runes using a link to the champion's respective image in the repository.
