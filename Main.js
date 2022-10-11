const { Client, Intents } = require('discord.js'); //instantiates the discord client and intents <--- importing a client
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); //Specified permissions you may need addtional intents

const kyle = '450055673296715786'; //Kyle's user id in Corbin's chat
const me = '299349110845210625'; //My user ID in Corbin's chat

client.once('ready', () => {
    console.log('Today is a good day to have a GREAT day'); //Called once when the client comes online - statement is made in command prompt to indicate that it is online
});

client.on('messageCreate', message => {    
    
    if (message.author.bot) {
        return;
    }
	
    if  (message.author.id === kyle) {
		console.log('high on life', message.content);
        message.channel.send('Remember to live, laugh, and love, Kyle!'); //Bot response no matter what Kyle says
    
    }

    console.log(message.content);

    if (message.author.id === me && message.content.includes('orange')) {
		console.log('high on life', message.content);
        message.channel.send('Remember to live, laugh, and love, Laken.'); //I had to include a test word (orange) to ensure that the bot would respond to messages

    }
});



client.login('MTAyNjE5MTkyNzUwMDA3OTIyNA.GNEMip.DT7P1k5ybdDAK3sjPXqdtkSSU3QwOu-nrDiAIQ'); //This is to log your specific bot in with the client token that is provided on https://discord.com/developers/applications and be sure to regenerate the token after publishing your work so no one else can alter what you have done

//Methods derived from 'discord.js' and any action that is taken such as reading and sending messages is an API call

//The bot will be a continuous project that will later host a variety of other responses and generate GIFs