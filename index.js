const discord = require("discord.js");
const client = new discord.Client();

client.on("ready", () => {
  console.log("Connected to the bot");
});

client.on("message", (msg) => {
  if (msg.content === "hi") {
    msg.reply("Hi to you too!");
  }
});

client.login("OTMxNTQxNjEwNzA0MDExMzU0.YeF7uw.88UgoRXUJYDLTkvHaqxO2TPJ0LU");
