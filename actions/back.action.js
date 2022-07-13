const { Markup } = require('telegraf')

const unitsKeyboard = require('../keyboards/units.keyboard')
const { racesKeyboard } = require('../keyboards/races.keyboard')

const raceBack = (composer) => {
  composer.action('raceBack', async (ctx) => {
    try {
      ctx.session.race = ''
      await ctx.answerCbQuery()
      await ctx.editMessageText(`Выберите расу Warcraft III`, Markup.inlineKeyboard(racesKeyboard))
    } catch (e) {
      console.error(e)
    }
  })
}

const unitBack = (composer) => {
  composer.action('unitBack', async (ctx) => {
    try {
      let keyboard
      if (ctx.session.race === 'Human') keyboard = unitsKeyboard.humanKeyboard
      else if (ctx.session.race === 'Night Elf') keyboard = unitsKeyboard.nightElfKeyboard
      else if (ctx.session.race === 'Orc') keyboard = unitsKeyboard.orcKeyboard
      else if (ctx.session.race === 'Undead') keyboard = unitsKeyboard.undeadKeyboard
      else {
        await ctx.deleteMessage()
        return
      }
      ctx.session.unit = ''
      await ctx.answerCbQuery()
      await ctx.editMessageText(
        `Выберите персонажа расы ${ctx.session.race}`,
        Markup.inlineKeyboard([...keyboard, [Markup.button.callback('← Назад', 'raceBack')]])
      )
    } catch (e) {
      console.error(e)
    }
  })
}

module.exports.raceBack = raceBack
module.exports.unitBack = unitBack
