const { Markup } = require('telegraf')

const { phraseKeyboard } = require('../keyboards/phrases.keyboard')
const { unitBack } = require('../actions/back.action')

const addActionUnits = (composer, ident) =>
  composer.action(ident, async (ctx) => {
    try {
      ctx.session.unit = ident
      await ctx.answerCbQuery()
      await ctx.editMessageText(
        `Выберите реплику персонажа ${ident}`,
        Markup.inlineKeyboard([...phraseKeyboard(ident), [Markup.button.callback('← Назад', 'unitBack')]])
      )
      unitBack(composer)
    } catch (e) {
      console.error(e)
    }
  })

module.exports.addActionUnits = addActionUnits
