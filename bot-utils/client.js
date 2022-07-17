const { Client } = require("discord.js");
const { getPrefix } = require("./prefix");
const { getCommand, getWordListeners } = require("./commands");

let client = null;

const config = {
  ignoreBots: false,
};

function createClient(intents) {
  client = new Client({ intents });
}

function setMessageCommand() {
  const prefix = getPrefix();
  client.on("messageCreate", (message) => {
    let { content } = message;
    if (config.ignoreBots && message.author.bot) {
      return;
    }

    if (content.startsWith(prefix)) {
      content = content.slice(prefix.length);
      content = content.split(" ");
      const command = getCommand(content[0]);
      if (command) {
        return command(message, content.slice(1));
      }
    }

    const wordListeners = getWordListeners();

    for (let { condition, execution } of wordListeners) {
      if (condition(content)) {
        execution(message);
        break;
      }
    }
  });
}

function startClient(token) {
  client.login(token);
}

function listenStart(onStart) {
  client.once("ready", onStart);
}

function setIgnoreBots(ignore) {
  config.ignoreBots = ignore;
}

module.exports = {
  startClient,
  setMessageCommand,
  createClient,
  listenStart,
  setIgnoreBots,
};
