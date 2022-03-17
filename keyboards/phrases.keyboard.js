const { Markup } = require('telegraf')
const {allUnits} = require('../helpers/parser.helper')


// returns [[Markup.button.callback(text, index)]...]
const makePhrasesKeyboard = unit => {    
    const phrases_keyboard = []
    const current_unit = allUnits.find(un => Object.keys(un).toString() === unit)
    allUnits[allUnits.indexOf(current_unit)][unit]
        .forEach(x => {
            const curUnit = allUnits[allUnits.indexOf(current_unit)][unit]
            const text = x['text']
            const index = curUnit.indexOf(curUnit.find(y => y['text'] === text))
            phrases_keyboard.push([Markup.button.callback(text, index.toString())])
        })
    return phrases_keyboard
}

module.exports.phraseKeyboard = makePhrasesKeyboard
