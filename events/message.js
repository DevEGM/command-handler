const Discord = require("discord.js");

module.exports = async (client, message) => {

    let prefix = "!";
    let owners = ['your id', 'other developer id'];

    const args = message.content.split(/ +/g);
    const command = args.shift().slice(prefix.length).toLowerCase();
    const cmd = client.commands.get(command) || client.aliases.get(command);

    if(!message.content.toLowerCase().startsWith(prefix) || !message.guild || message.author.bot || !cmd) return;
    if(cmd.requirements.botOwner && cmd.requirements.botOwner === true && !owners.includes(message.author.id)) return client.functions.error(message.channel, "Sorry, only the developer of the bot is allowed to use this command.");
    if(cmd.requirements.botPerms && cmd.requirements.botPerms.length > 0 && !message.guild.me.hasPermission(cmd.requirements.botPerms)) return client.functions.error(message.channel, `Sorry, I don't have the permissions \`${message.guild.me.permissions.missing(cmd.requirements.botPerms).join(", ").replace(/_/gi, " ")}\`.`);
    if(cmd.requirements.userPerms && cmd.requirements.userPerms.length > 0 && !message.member.hasPermission(cmd.requirements.userPerms)) return client.functions.error(message.channel, `Sorry, you don't have the permissions \`${message.member.permissions.missing(cmd.requirements.userPerms).join(", ").replace(/_/gi, " ")}\`.`);

    cmd.run(client, message, args).catch(e => {return console.log(e)});

} 