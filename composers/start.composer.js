const { Composer } = require('telegraf')

const startText = require('../texts/start.text')

const composer = new Composer()

composer.start((ctx) => ctx.replyWithHTML(startText(ctx.message.from.first_name)))

module.exports = composer
