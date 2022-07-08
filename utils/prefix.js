let prefix = "+";

function setPrefix(newPrefix) {
  prefix = newPrefix;
}

function getPrefix() {
  return prefix;
}

module.exports = {
  setPrefix,
  getPrefix,
};
