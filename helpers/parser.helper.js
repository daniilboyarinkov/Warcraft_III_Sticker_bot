const humanUnits    = require('../config/humanUnits.config.json')
const nightElfUnits = require('../config/nightElfUnits.config.json')
const orcUnits      = require('../config/orcUnits.config.json')
const undeadUnits   = require('../config/undeadUnits.config.json')

const allUnits = [...humanUnits, ...nightElfUnits, ...orcUnits, ...undeadUnits]

// parsing names of all units
const humanUnitsNames       = []
const nightElfUnitsNames    = []
const orcUnitsNames         = []
const undeadUnitsNames      = []

humanUnits   .forEach(unit => humanUnitsNames   .push(...Object.keys(unit)))
nightElfUnits.forEach(unit => nightElfUnitsNames.push(...Object.keys(unit)))
orcUnits     .forEach(unit => orcUnitsNames     .push(...Object.keys(unit)))
undeadUnits  .forEach(unit => undeadUnitsNames  .push(...Object.keys(unit)))


// parsing every single quote
const allText = []
allUnits.forEach(obj => 
{
    const unit = obj[Object.keys(obj)[0]]
    unit.forEach(member => allText.push(member["text"]))
})

// get unit's text, sticker and voices by race, name and id
const getUnitPhrase = (name, id) => allUnits.find(obj => Object.keys(obj)[0] === name)[name][id]

// exporting names of all units
module.exports.humanUnitsNames = humanUnitsNames
module.exports.nightElfUnitsNames = nightElfUnitsNames
module.exports.orcUnitsNames = orcUnitsNames
module.exports.undeadUnitsNames = undeadUnitsNames

module.exports.allUnitsNames = [...humanUnitsNames, ...nightElfUnitsNames, ...orcUnitsNames, ...undeadUnitsNames]
module.exports.allUnits = allUnits

// exporting every single quote
module.exports.allText = allText

module.exports.getUnitPhrase = getUnitPhrase
