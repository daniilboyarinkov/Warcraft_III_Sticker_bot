const { Markup } = require('telegraf')
const { humanUnitsNames, nightElfUnitsNames, orcUnitsNames, undeadUnitsNames } = require('../helpers/parser.helper')

// templates for keyboards
const humanKeyboard     = []
const nightElfKeyboard  = []
const orcKeyboard       = []
const undeadKeyboard    = []

// filling keyboards
humanUnitsNames   .forEach(unitName => humanKeyboard   .push([Markup.button.callback(unitName, unitName)]))
nightElfUnitsNames.forEach(unitName => nightElfKeyboard.push([Markup.button.callback(unitName, unitName)]))
orcUnitsNames     .forEach(unitName => orcKeyboard     .push([Markup.button.callback(unitName, unitName)]))
undeadUnitsNames  .forEach(unitName => undeadKeyboard  .push([Markup.button.callback(unitName, unitName)]))

// export keyboards
module.exports.humanKeyboard    = humanKeyboard
module.exports.nightElfKeyboard = nightElfKeyboard
module.exports.orcKeyboard      = orcKeyboard
module.exports.undeadKeyboard   = undeadKeyboard
