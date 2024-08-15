import { Telegraf } from "telegraf";

const TOKEN = "7444406171:AAFkZ05S1q5dxCdsShypqUfQNfBcRDW-d0U";
const bot = new Telegraf(TOKEN);

const web_link =
  "https://66acce3338c4bf3ef052dad6--heroic-crostata-4055d7.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Salom ", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
