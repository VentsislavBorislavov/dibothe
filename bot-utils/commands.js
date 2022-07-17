const commands = new Map();
const wordListeners = [];

function getCommand(name) {
  return commands.get(name) || null;
}

function setCommand(name, callback) {
  commands.set(name, callback);
}

function setWordListener(condition, execution) {
  wordListeners.push({ condition, execution });
}

function getWordListeners() {
  return wordListeners;
}

module.exports = {
  setCommand,
  getCommand,
  setWordListener,
  getWordListeners,
};
