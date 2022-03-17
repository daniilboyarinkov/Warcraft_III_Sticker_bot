const {Composer} = require('telegraf')
const composer = new Composer()
const startText = require('../texts/start.text')

composer.start((ctx) => {
    ctx.replyWithHTML(startText(ctx.message.from.first_name)).catch(function(error) {
        if (error.response && error.response.statusCode === 403) return
})})

module.exports = composer
