const Discord = require("discord.js");
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
});

client.on("messageCreate", (message) => {
    if (message.content === "hi") {
        message.reply('Hello World')
    } else if (message.content === "Hi") {
        message.reply('Hello There')
    } else if (message.content === "hey") {
        message.reply('Hello')
    } else if (message.content === "Hey") {
        message.reply('Who are you?')
    }
})

client.login(process.env.TOKEN);