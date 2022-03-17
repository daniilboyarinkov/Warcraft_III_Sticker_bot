const { getUnitPhrase } = require('../helpers/parser.helper')

const addActionPhraseId = (composer, id) => {
    composer.action(id, async ctx => {
        await ctx.answerCbQuery()
        await ctx.editMessageText(`${ctx.session.unit}`)
        const unitInfo = getUnitPhrase(ctx.session.unit, +id)
        const voices = unitInfo.voice
        ctx.reply(unitInfo.text)
        try {
            if (unitInfo.sticker) ctx.replyWithSticker(unitInfo.sticker)
        } catch (e) { }
        try {
            if (voices.length > 1) {
                const randomVoice = voices[Math.floor(Math.random() * (voices.length))]
                ctx.replyWithVoice(randomVoice)
            }
            else {
                ctx.replyWithVoice(voices[0])
            }
        } catch (e) { }
    })
}

module.exports.addActionPhraseId = addActionPhraseId
