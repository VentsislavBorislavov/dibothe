const { Client } = require("discord.js");

class DiscordBotHelper {
  constructor() {
    this.commands = new Map();
  }

  static getInstance(intents) {
    if (!this.instance) {
      this.instance = new DiscordBotHelper(intents);
    }
    return this.instance;
  }

  initialize(intents) {
    this.client = new Client({ intents });
  }

  add(command, callback) {
    this.commands.set(command, callback);
  }

  setToken(token) {
    this.token = token;
  }

  setPrefix(prefix) {
    this.prefix = prefix;
  }

  start(callback) {
    const { client, prefix, token, commands } = this;
    client.on("messageCreate", (message) => {
      let { content } = message;
      if (!content.startsWith(prefix)) {
        console.log('no content');
        return;
      }

      content = content.slice(prefix.length);
      content = content.split(" ");
      if (!commands.has(content[0])) {
        return;
      }
      const execute = commands.get(content[0]);
      execute(message, content.slice(1));
    });
    client.login(token);
  }
}

const discordbothelper = DiscordBotHelper.getInstance();

module.exports = discordbothelper;
