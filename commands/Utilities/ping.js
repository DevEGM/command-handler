const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    message.channel.send(`Pong !`);

}

exports.help = {
    name: "ping",
    aliases: ['pong']
}

exports.requirements = {
    botOwner: false,
    botPerms: [],
    userPerms: []
}
