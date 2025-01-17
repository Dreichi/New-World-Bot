require('dotenv').config();
const discord = require('discord.js');
const client = new discord.Client();
const { registerCommands, registerEvents } = require('./utils/registry');
(async () => {
    client.login(process.env.BOT_TOKEN);
    client.commands = new Map();
    client.cachedMessageReactions = new Map();
    client.cachedGuild = new Map();
    await registerEvents(client, '../events');
    await registerCommands(client, '../commands'); 
})();