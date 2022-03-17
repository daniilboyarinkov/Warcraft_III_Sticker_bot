const { Markup } = require('telegraf')

const addActionRace = (composer, ident, keyboard) => composer.action(ident, async (ctx) => {
    try {
        ctx.session ??= { race: ident }
        await ctx.answerCbQuery()
        await ctx.editMessageText(`Выберите персонажа расы ${ident}`, Markup.inlineKeyboard(keyboard))
    }
    catch (e) { console.error(e) }
})

module.exports.addActionRace = addActionRace
