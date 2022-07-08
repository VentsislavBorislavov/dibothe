function ping(message, params) {
  message.reply("Pong");
}

function pingWithMessage(message, params) {
  message.reply(params.join(" "));
}

module.exports = {
  ping,
  pingWithMessage,
};
