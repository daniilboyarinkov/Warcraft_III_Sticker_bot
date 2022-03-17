const { Telegraf, session } = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.use(session())
bot.use(require('./composers/start.composer'))
bot.use(require('./composers/help.composer'))
bot.use(require('./composers/hearUnitPhrase.composer'))

bot.launch()
    .then(() => { console.log(`Bot started...`) })
    .catch(err => { console.error('Something went wrong', err) })
