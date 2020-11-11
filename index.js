const Discord = require("discord.js");
const config = require("./Storage/config.json");
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.event = new Discord.Collection();

const loadCommands = require("./functions/commands.js");
const loadEvents = require("./functions/events.js");

const load = async () => {
    await loadCommands.run(client);
    await loadEvents.run(client);
}

client.functions = require("./functions/functions.js");

load();
client.login(config.token);