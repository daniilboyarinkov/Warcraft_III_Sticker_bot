const { UnitTextVoice } = require('../helpers/parser.helper')
const { Composer } = require('telegraf')
const composer = new Composer()

const putToCache = (elem, cache) => {
  if (cache.indexOf(elem) != -1) return
  const i = Math.floor(Math.random() * (cache.length + 1))
  cache.splice(i, 0, elem)
}

const randomCompare = () => {
  const cache = []
  return function (a, b) {
    putToCache(a, cache)
    putToCache(b, cache)
    return cache.indexOf(b) - cache.indexOf(a)
  }
}

const firstN = (obj, n) => {
  const compare = randomCompare()

  return Object.keys(obj)
    .sort(compare)
    .slice(0, n)
    .reduce(function (memo, current) {
      memo[current] = obj[current]
      return memo
    }, {})
}

const findAllIncludesQuery = (query) => {
  if (query == '--all') return firstN(UnitTextVoice, 21)
  const result = {}
  Object.keys(UnitTextVoice)
    .filter((text) => text.toLowerCase().includes(query.trim().toLowerCase()))
    .forEach((t) => (result[t] = UnitTextVoice[t]))

  if (Object.keys(result).length > 21) return firstN(result, 21)
  return result
}

composer.on('inline_query', async (ctx) => {
  let query = ctx.inlineQuery.query

  let finded = []
  if (!query || query.length < 2) query = '--all'

  finded = findAllIncludesQuery(query)
  const results = Object.keys(finded).map((r, id) => {
    return {
      type: 'voice',
      voice_file_id: finded[r][1],
      id: id,
      title: `${finded[r][0]}: ${r}`,
      caption: `<b>${finded[r][0]}:</b>\n\n <i>${r.replace('---', '\n')}</i>`,
      parse_mode: 'HTML',
    }
  })

  return await ctx.answerInlineQuery(results, { cache_time: 0 })
})

module.exports = composer
