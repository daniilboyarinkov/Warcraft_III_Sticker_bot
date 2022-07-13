module.exports = Object.prototype.getKeyByValue = function (value, objs) {
  // защита от циклических ссылок
  if (!objs) objs = []

  for (var prop in this) {
    if (this.hasOwnProperty(prop)) {
      if (this[prop] === value) {
        return prop
      } else if (typeof this[prop] === 'object' && objs.indexOf(this[prop]) == -1) {
        objs.push(this[prop])
        var res = this[prop].getKeyByValue(value, objs)
        if (res) return prop + '.' + res
      }
    }
  }
}
