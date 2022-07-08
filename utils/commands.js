const commands = new Map();

function getCommand(name) {
  return commands.get(name) || null;
}

function setCommand(name, callback) {
  commands.set(name, callback);
}

module.exports = {
  setCommand,
  getCommand,
};
