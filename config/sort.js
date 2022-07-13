const fs = require('fs-extra')

const load_obj = fs
    .readJSONSync('./undeadUnits.config.json') // path to JSON
    .sort((a, b) => (Object.keys(a)[0] > Object.keys(b)[0] ? 1 : -1))
const sorted_obj = {}
const unload_obj = []

load_obj.forEach((obj) => {
    Object.keys(obj).forEach(
        (x) => (sorted_obj[x] = obj[x].sort((a, b) => (a.text > b.text ? 1 : -1)))
    )
})
unload_obj.push(sorted_obj)

fs.writeJSON('./undeadUnits_sorted.config.json', unload_obj, { spaces: 4, encoding: 'UTF-8' })
