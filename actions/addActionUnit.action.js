const { Markup } = require('telegraf')
const { phraseKeyboard } = require('../keyboards/phrases.keyboard')

const addActionUnits = (composer, ident) => composer.action(ident, async (ctx) => {
    try {
        ctx.session["unit"] = ident
        await ctx.answerCbQuery()
        await ctx.editMessageText(`Выберите реплику персонажа ${ident}`,
            Markup.inlineKeyboard(phraseKeyboard(ident)))
    }
    catch (e) { console.error(e) }
})

module.exports.addActionUnits = addActionUnits
