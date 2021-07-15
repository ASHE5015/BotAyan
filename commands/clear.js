module.exports ={
    name: 'clear',
    description: "Clears messages",
   async execute(bot,massage,args,Discord){
  
if (!args[0]) return massage.reply("Please enter the amount of messages you want to delete");
if(isNaN(args[0])) return massage.reply("Please enter a real number");
if(args[0]>100)return massage.reply("You cannot delete more than 100");
if(args[0]<1) return massage.reply("You cannot introduce negative numbers");

await massage.channel.massages.fetch({limit: args[0]}).then(massages =>{
    massage.channel.bulkDelete(massages);

});


   // message.channel.send('I see you dont have that role, do you ? Let me just ...');
   // message.member.roles.add('835749199840149534').catch(console.error);
   // message.member.roles.remove('835749199840149534');




    }
    }