const { Telegraf } = require('telegraf')
const LocalSession = require('telegraf-session-local')

require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.use(new LocalSession().middleware())
bot.use(require('./composers/start.composer'))
bot.use(require('./composers/help.composer'))
bot.use(require('./composers/hearUnitPhrase.composer'))

bot.use(require('./composers/inlineMode.composer'))

bot
  .launch()
  .then(() => {
    console.log(`Bot started...`)
  })
  .catch((err) => {
    console.error('Something went wrong', err)
  })
