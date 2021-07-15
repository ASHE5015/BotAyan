module.exports = {
    name: 'kick',
    description: "Kicks people",
    execute(bot,massage,args,Discord){
        const member = massage.mentions.users.first();
              if(member){
const memberTarger = massage.guild.members.cache.get(member.id);
memberTarger.kick();
massage.channel.send("User has been kicked");
    
        }
        else{
            massage.channel.send('You didnt perform this command corectly');
        }
   
    
    }
}