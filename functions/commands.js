const { readdirSync } = require("fs");
const { join } = require("path");
const filePath = join(__dirname, "..", "commands");
const fs = require("fs");

const functions = require("../functions/functions.js");

module.exports.run = (client) => {
    functions.loadCommands(client, `${filePath}/Utilities/`);
}