// discord-example.js
/*jshint esversion: 6 */

const Discord = require("discord.js");
const client = new Discord.Client();
// 1. require the ucgmessagehandler
const ucgHandler = require('./ucgmessagehandler');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  // 2. Let UCGMessageHandler determine if it should handle msg
  if (ucgHandler.handle(msg)) {
    return;
  }
  
  // Here is your other code
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  };
});

client.login('token');