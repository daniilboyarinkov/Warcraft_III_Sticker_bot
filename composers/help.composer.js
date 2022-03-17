const {Composer} = require('telegraf')
const composer = new Composer()
const helpText = require('../texts/help.text')

composer.help((ctx) => {
    ctx.reply(helpText).catch(function(error) {
        if (error.response && error.response.statusCode === 403) return
})})

module.exports = composer
