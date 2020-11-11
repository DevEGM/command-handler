# command-handler

A simple command handler made by Vi.

## Example Commands
```
const Discord = require("discord.js");

exports.run = async (client, message, args) => {

// your code here

}

exports.help = {
    name: "command name",
    aliases: ['command aliases']
}

exports.requirements = {
    botOwner: false,
    botPerms: [],
    userPerms: []
}

   ```
