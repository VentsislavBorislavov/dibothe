const {
  createClient,
  setMessageCommand,
  startClient,
} = require("./utils/client");

const { setPrefix } = require("./utils/prefix");

const { setCommand } = require("./utils/commands");

function add(name, callback) {
  setCommand(name, callback);
}
function start(token) {
  startClient(token);
}

function gumpy(prefix, intents) {
  createClient(intents);
  setPrefix(prefix);
  setMessageCommand();
  return {
    add,
    start,
  };
}

module.exports = gumpy;
