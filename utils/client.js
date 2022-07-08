const { Client } = require("discord.js");
const { getPrefix } = require("./prefix");
const { getCommand } = require("./commands");

let client = null;
let messagesSetUp = false;

function createClient(intents) {
  client = new Client({ intents });
}

function setMessageCommand() {
  const prefix = getPrefix();
  client.on("messageCreate", (message) => {
    let { content } = message;
    if (!content.startsWith(prefix)) {
      return;
    }

    content = content.slice(prefix.length);
    content = content.split(" ");
    const command = getCommand(content[0]);
    if (!command) {
      return;
    }
    command(message, content.slice(1));
  });
}

function startClient(token) {
  client.login(token);
}

module.exports = {
  startClient,
  setMessageCommand,
  createClient,
};
