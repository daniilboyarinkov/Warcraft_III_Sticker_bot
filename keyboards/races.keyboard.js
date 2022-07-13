const { Markup } = require('telegraf')

const racesKeyboard = [
  [Markup.button.callback('Human Alliance', 'Human')],
  [Markup.button.callback('Night Elf', 'Night Elf')],
  [Markup.button.callback('Orc', 'Orc')],
  [Markup.button.callback('Undead', 'Undead')],
]

module.exports.racesKeyboard = racesKeyboard
