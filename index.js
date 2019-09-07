// Module import
const Discord = require('discord.js');

// New instance of client
const client = new Discord.Client();

// Config.json file contains the bot's token
const config = require('./config.json');

// On Startup
client.on('ready', () => {
    console.log(`Connected as ${client.user.tag}`);
    client.user.setActivity('with my tollie');
});

client.login(config.token);

