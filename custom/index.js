const toutiao = require('./toutiao')

module.exports = function (url) {
  if (/(www|m)\.toutiao\.com/.test(url)) return toutiao(url)
  return false
}
