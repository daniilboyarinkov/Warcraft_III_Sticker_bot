const { Markup } = require('telegraf')
const { humanUnitsNames, nightElfUnitsNames, orcUnitsNames, undeadUnitsNames } = require('../helpers/parser.helper')

// templates for keyboards
const humanKeyboard     = []
const nightElfKeyboard  = []
const orcKeyboard       = []
const undeadKeyboard    = []

// filling keyboards
humanUnitsNames   .sort().forEach(unitName => humanKeyboard   .push([Markup.button.callback(unitName, unitName)]))
nightElfUnitsNames.sort().forEach(unitName => nightElfKeyboard.push([Markup.button.callback(unitName, unitName)]))
orcUnitsNames     .sort().forEach(unitName => orcKeyboard     .push([Markup.button.callback(unitName, unitName)]))
undeadUnitsNames  .sort().forEach(unitName => undeadKeyboard  .push([Markup.button.callback(unitName, unitName)]))

// export keyboards
module.exports.humanKeyboard    = humanKeyboard
module.exports.nightElfKeyboard = nightElfKeyboard
module.exports.orcKeyboard      = orcKeyboard
module.exports.undeadKeyboard   = undeadKeyboard
