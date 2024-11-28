const express = require('express');
const fs = require('fs');
const app = express();
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const token = "MTE1ODI5OTI0NzA4NzczNDc4NA.GoAXXu.DDx0n2178Kn7GOD4oddJzJHXjjx-8qtbIw3KVA";

// listening to requests
app.get('/', (req, res) => {
  res.sendStatus(200);
});

// new Discord Client
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessages],
});

client.once("ready", () => {
  client.user.setActivity('with my slash commands',{ type:'PLAYING' });
  console.log(`Ready on ${client.user.tag}`);
});

client.on(Events.MessageCreate, (message) => {
  if (message.author.bot) return;
  message.reply('I exist');
})

console.log(token);
try {
  client.login(token);
} catch (err) {
  console.log(err)
}
module.exports = app;
