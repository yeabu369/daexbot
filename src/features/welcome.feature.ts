import { Composer } from "grammy";

import { Context } from "@bot/types";
import { logHandle } from "@bot/helpers/logging";

import { selectActionListKeyboard } from "@bot/keyboards";

export const composer = new Composer<Context>();

const feature = composer.chatType("private");

feature.command("start", logHandle("handle /start"), async (ctx) => {
  await ctx.replyWithChatAction("typing");
  await ctx.reply(ctx.t("welcome"));
  await ctx.reply(ctx.t("action"), {
    reply_markup: selectActionListKeyboard,
  });
});
