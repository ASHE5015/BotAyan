module.exports = {
    name: 'ban',
    description: "Bans people",
    execute(bot,massage,args,Discord){
        const member = massage.mentions.users.first();
     
        if(member){
const memberTarger = massage.guild.members.cache.get(member.id);
memberTarger.ban();
massage.channel.send("User has been banned");
    
        }
        else{
            massage.channel.send('You didnt perform this command corectly');
        }
   
    
    }
}