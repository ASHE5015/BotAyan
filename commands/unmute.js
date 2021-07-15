module.exports ={
    name: 'unmute',
    description: "unmutes people",
   execute(bot,massage,args,Discord){
  
const target = massage.mentions.users.first();
if (target){
let mainRole = massage.guild.roles.cache.find(role => role.name === 'Member');
let muteRole = massage.guild.roles.cache.find(role => role.name === 'Mute');
let memberTarget= massage.guild.members.cache.get(target.id);

memberTarget.roles.add(mainRole.id);
memberTarget.roles.remove(muteRole.id);
massage.channel.send(`<@${memberTarget.user.id}> has been unmuted`);

}else{
    massage.channel.send('Couldnt find that member or you didnt perform the command corectly');
}


}
    }
    