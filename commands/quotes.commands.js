const axios = require("axios").default;

async function getQuote(message, params) {
  const response = await axios.get("https://animechan.vercel.app/api/random");
  const data = response.data;
  const mesResponse = `Anime: ${data.anime}
${data.quote}
~~${data.character}`;

  message.channel.send(mesResponse);
}

module.exports = {
  getQuote,
};
