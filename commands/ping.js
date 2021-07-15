

module.exports={
    name:'ping',
    description:'Ping command',
    execute(bot,massage,args,Discord){
        massage.channel.send('Pong');
    }
}