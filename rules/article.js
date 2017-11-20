const read = require('node-readability').read
const URL = require('url')

/**
 * Rules.
 */

module.exports = [function ($, url) {
  let path = URL.parse(url).pathname
  if (!path || path === '/') return ''
  return new Promise((resolve, reject) => {
    read($.html(), (err, article, meta) => {
      if (!err) resolve(article.content)
    })
  })
}]
