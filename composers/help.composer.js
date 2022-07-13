const { Composer } = require('telegraf')

const helpText = require('../texts/help.text')

const composer = new Composer()

composer.help((ctx) => ctx.reply(helpText))

module.exports = composer
