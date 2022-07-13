const { Markup } = require('telegraf')
const { allUnits } = require('../helpers/parser.helper')

// returns [[Markup.button.callback(text, index)]...]
const makePhrasesKeyboard = (unit) => {
    const phrases_keyboard = []
    allUnits
        .find((un) => Object.keys(un).includes(unit))
        [unit].forEach((x, i) =>
            phrases_keyboard.push([Markup.button.callback(x['text'].replace("---", "\n"), i.toString())])
        )
    return phrases_keyboard
}

module.exports.phraseKeyboard = makePhrasesKeyboard
