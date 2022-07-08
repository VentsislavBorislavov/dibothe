const { Intents } = require("discord.js");
const { ping, pingWithMessage } = require("./commands/ping.command");
const { getQuote } = require("./commands/quotes.commands");
const BOT_TOKEN = require("./config");

const gumpy = require("./gumpy");

const app = gumpy("-", [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]);

app.add("ping", ping);
app.add("ping+", pingWithMessage);
app.add("quote", getQuote);

app.start(BOT_TOKEN);
