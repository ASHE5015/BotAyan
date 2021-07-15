const Discord = require('discord.js');
const bot = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const prefix = 'XD';
const fs = require('fs');
require('dotenv').config();


bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file =>file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command)
}

bot.on("ready", () => {
    console.log(`${bot.user.username}, is online!`);
    bot.user.setActivity("prefix is 'XD'!", {type: "WATCHING"});
   // bot.user.setPresence('Idle');
});

bot.on ("message", massage => {
    if(!massage.content.startsWith(prefix) || massage.author.bot) return;
    const args = massage.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


   if(command==='ping') {bot.commands.get('ping').execute(bot,massage,args,Discord);}
   if(command==='ban') {bot.commands.get('ban').execute(bot,massage,args,Discord);}
   if(command==='kick') {bot.commands.get('kick').execute(bot,massage,args,Discord);}
   if(command==='clear') {bot.commands.get('clear').execute(bot,massage,args,Discord);}
   if(command==='mute') {bot.commands.get('mute').execute(bot,massage,args,Discord);}
   if(command==='unmute') {bot.commands.get('unmute').execute(bot,massage,args,Discord);}
});
bot.login(process.env.TOKEN);
