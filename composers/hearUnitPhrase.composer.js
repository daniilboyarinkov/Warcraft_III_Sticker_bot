const { Composer, Markup, session } = require('telegraf')
const { addActionRace } = require('../actions/addActionRace.action')
const { addActionUnits } = require('../actions/addActionUnit.action')
const { addActionPhraseId } = require('../actions/addActionPhraseId.action')
const { racesKeyboard } = require('../keyboards/races.keyboard')
const { allUnitsNames } = require('../helpers/parser.helper')
const unitsKeyboard = require('../keyboards/units.keyboard')
const composer = new Composer()
composer.use(session())

// reaction to the command
composer.command('hear_unit_phrase', (ctx) => {
    try { ctx.replyWithHTML('<b>Выберите расу Warcraft III</b>', Markup.inlineKeyboard(racesKeyboard)) }
    catch (e) { console.error(e) }
})

// adding actions to the races
addActionRace(composer, 'Human', unitsKeyboard.humanKeyboard)
addActionRace(composer, 'Night Elf', unitsKeyboard.nightElfKeyboard)
addActionRace(composer, 'Orc', unitsKeyboard.orcKeyboard)
addActionRace(composer, 'Undead', unitsKeyboard.undeadKeyboard)

//adding actions to all units
allUnitsNames.forEach(unit => addActionUnits(composer, unit))

// adding actions to all phrases by their ids
for (let i = 0; i < 30; i++) { addActionPhraseId(composer, i.toString()) }

module.exports = composer
