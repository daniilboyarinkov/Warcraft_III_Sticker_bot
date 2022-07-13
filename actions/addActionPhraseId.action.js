const { getUnitPhrase } = require('../helpers/parser.helper')

const addActionPhraseId = (composer, id) => {
  composer.action(id, async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.deleteMessage()
      if (!ctx.session.unit) return
      const unitInfo = getUnitPhrase(ctx.session.unit, +id)
      const voices = unitInfo.voice

      getRandomId = (len) => Math.floor(Math.random() * len)

      if (unitInfo.sticker) ctx.replyWithSticker(unitInfo.sticker)
      let voice = ''
      if (voices.length > 1) voice = voices[getRandomId(voices.length)]
      else voice = voices[0]

      ctx.replyWithVoice(voice, {
        caption: `<b>${ctx.session.unit}:</b> \n\n<i>${unitInfo.text.replace('---', '\n')}</i>`,
        parse_mode: 'HTML',
      })
      ctx.session.race = ''
      ctx.session.unit = ''
    } catch (e) {
      console.error(e)
    }
  })
}

module.exports.addActionPhraseId = addActionPhraseId