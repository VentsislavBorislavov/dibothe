const {
  createClient,
  setMessageCommand,
  startClient,
  listenStart,
  setIgnoreBots,
  getClient,
} = require("./bot-utils/client");

const { setPrefix } = require("./bot-utils/prefix");

const { setCommand, setWordListener } = require("./bot-utils/commands");
const Combiner = require("./bot-utils/combiner");

const STRING_TYPE = "string";

// Default export
function botHelper(prefix, intents) {
  createClient(intents);
  setPrefix(prefix);
  setMessageCommand();
  return {
    add: setCommand,
    addWordListener: setWordListener,
    ignoreBots,
    start,
    client: getClient(),
    useCombiner,
  };
}

botHelper.Combiner = Combiner;

// BOT FUNCTIONS

// Starts the bot
function start(token, onStart) {
  if (onStart) {
    listenStart(onStart);
  }
  startClient(token);
}

// Sets if the bot should be listening to bot messages
function ignoreBots(ignore) {
  setIgnoreBots(ignore ?? true);
}

function useCombiner(combiner) {
  combiner.valueOf().forEach(({ arg1, arg2 }) => {
    if (typeof arg1 === STRING_TYPE) {
      setCommand(arg1, arg2);
      return;
    }
    setWordListener(arg1, arg2);
  });
}

module.exports = botHelper;
