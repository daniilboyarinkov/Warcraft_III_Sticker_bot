const { Markup } = require('telegraf')
const { raceBack } = require('../actions/back.action')

const addActionRace = (composer, ident, keyboard) =>
  composer.action(ident, async (ctx) => {
    try {
      ctx.session.race = ident
      await ctx.answerCbQuery()
      await ctx.editMessageText(
        `Выберите персонажа расы ${ident}`,
        Markup.inlineKeyboard([...keyboard, [Markup.button.callback('← Назад', 'raceBack')]])
      )
      raceBack(composer)
    } catch (e) {
      console.error(e)
    }
  })

module.exports.addActionRace = addActionRace
