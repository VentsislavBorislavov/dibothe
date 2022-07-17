const {
  createClient,
  setMessageCommand,
  startClient,
  listenStart,
  setIgnoreBots,
} = require("./bot-utils/client");

const { setPrefix } = require("./bot-utils/prefix");

const { setCommand, setWordListener } = require("./bot-utils/commands");

function start(token, onStart) {
  if (onStart) {
    listenStart(onStart);
  }
  startClient(token);
}

function ignoreBots(ignore) {
  setIgnoreBots(ignore ?? true);
}

function botHelper(prefix, intents) {
  createClient(intents);
  setPrefix(prefix);
  setMessageCommand();
  return {
    add: setCommand,
    addWordListener: setWordListener,
    ignoreBots,
    start,
  };
}

module.exports = botHelper;
