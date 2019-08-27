const Discord = require("discord.js");
const client = new Discord.Client();
const myid = ['416568006865584141'];
const prefix = ['-'];

client.on('ready', () => {
   console.log(`upgrade by oh shit`);
});


	client.on('message', message => {

	  if (!message.content.startsWith(prefix)) return;

	  let command = message.content.split(" ")[0];
	  command = command.slice(prefix.length);

	  let args = message.content.split(" ").slice(1);

	// +say
		if (message.content.startsWith(prefix + "g")) {
	if(!message.channel.guild) return message.channel.send()
		message.channel.sendMessage(args.join(''))
	  }

	});

client.on('message', message => {
    if(message.content === prefix+'gl'){
        message.channel.send("#credits "+"<@" + myid + "> 2000")
    }
});

client.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`daiso bot hello g.l amine moheHello hi How are You i wan't merry  بحبك عربي انقليزي ه ه ه ه ه ههههههههههه خوخو خاخي بافقي بيلهابيله اتسيل-بيستشب-خسياشب-0تشيسب احب  فوزيةi Love Mohe i love Amine hello lovers Friends For ever you I Love You dwsfhniasdfihasdofhgasd0fig0asdfg`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client.login("NTc2NDU0NzAxNDg3NDg5MDI0.XWUXCg.3wLlh2Ye-GYZjiZr7d2xTxcKVC8");
