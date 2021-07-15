const ms = require('ms');

module.exports ={
    name: 'mute',
    description: "mutes people",
   execute(message, args){
   
const target = massage.mentions.users.first();
if (target){
let mainRole = massage.guild.roles.cache.find(role => role.name === 'Member');
let muteRole = massage.guild.roles.cache.find(role => role.name === 'Mute');
let memberTarget= massage.guild.members.cache.get(target.id);
if (!args[1]){
    memberTarget.roles.remove(mainRole.id);
memberTarget.roles.add(muteRole.id);
massage.channel.send(`<@${memberTarget.user.id}> has been muted`);
return
}
memberTarget.roles.remove(mainRole.id);
memberTarget.roles.add(muteRole.id);
massage.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);
setTimeout(function(){
    memberTarget.roles.remove(muteRole.id);
    memberTarget.roles.add(mainRole.id);
    massage.channel.send(`<@${memberTarget.user.id}> has been unmuted`);

},ms(args[1]));
}else{
    massage.channel.send('Couldnt find that member or you didnt perform the command corectly');
}
}
    }
    