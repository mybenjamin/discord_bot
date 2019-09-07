// Module import
const Discord = require('discord.js');

// New instance of client
const client = new Discord.Client();

// config.json file
const config = require('./config.json');

// On Startup
client.on('ready', () => {
    console.log(`Connected as ${client.user.tag}`);
    client.user.setActivity('with my tollie');
});

client.login(config.token);

