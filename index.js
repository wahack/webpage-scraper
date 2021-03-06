// const commonRules = require('./rules')
// const siteRules = require('./site-rules')
const extractor = require('./extractor')
const cheerio = require('cheerio')
const _ = require('lodash')
const request = require('request-promise')
// const store = require('./store')
const htmlDecode = require('./html-decode')
const FileCookieStore = require('tough-cookie-filestore')
const path = require('path')
var localJar = request.jar(new FileCookieStore(path.resolve(__dirname, './cookies.json')))
const config = require('./config')
const URL = require('url')
const customScraper = require('./custom')
const XmlEntities = require('html-entities').XmlEntities
const read = require('node-readability').read

// function injectPlugins ($) {
//   $.prototype.exclude = function (selector) {
//     this.find(selector).remove()
//     return this
//   }
// }

function scrapeMetadata (html, url, opts = {}) {
  var $ = cheerio.load(html)
  return extractor($, url, function (rules) {
    if (opts.scrapArticle) {
      rules.article.push(
        function ($, url) {
          let path = URL.parse(url).pathname
          if (!path || path === '/') return ''
          return new Promise((resolve, reject) => {
            read($.html(), (err, article, meta) => {
              if (!err) resolve(article.content)
            })
          })
        }
      )
    } else {
      return _.omit(rules, 'article')
    }
    return rules
  })
  // let rules = _.mergeWith({}, commonRules, siteRules(url), (src, newVal) => {
  //   if (!src || !newVal) return src || newVal
  //   if (_.isArray(newVal)) return newVal.concat(src)
  //   if (_.isFunction(newVal)) return [newVal].concat(src)
  // })
  // var keys = Object.keys(rules)
  // injectPlugins($)
  // var promises = keys.map(function (key) {
  //   return scrapeMetadatum($, url, rules[key])
  // })
  // return Promise.all(promises).then(function (values) {
  //   let result = keys.reduce(function (memo, key, i) {
  //     memo[key] = values[i]
  //     return memo
  //   }, {})
  //   store(result, html)
  //   delete result.extra
  //   return result
  // })
}
/**
 * ???????????????????????????
//  */
// function scrapeMetadatum ($, url, rules) {
//   if (!Array.isArray(rules)) rules = [rules]
//   return rules.reduce(function (promise, rule) {
//     return promise.then(function (value) {
//       if (value != null) return value
//       var next = rule($, url)
//       if (next != null) return next
//       return null
//     })
//   }, Promise.resolve())
// }
/**
 * TODO:
 *   ??????????????????521?????????????????????https://wequant.io/study/intro.system.html
 */
module.exports = function (url, opts) {
  if (!url) return Promise.reject(new Error('url??????'))
  if (url.substr(0, 4) !== 'http') url = 'http://' + url
  url = XmlEntities.decode(url)
  let customPromisefy = customScraper(url)
  if (customPromisefy) return customPromisefy
  let doRequest = request({
    url: url,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36',
      'Accept-Encoding': 'gzip'
    },
    // ??????encoding??????????????? null??????????????????????????????????????????toString('utf-8')???????????????, ??????????????????????????????
    encoding: null,
    jar: config.cookie[URL.parse(url).host] ? localJar : true,
    // ??????gzip???handle????????????????????????????????????????????????????????????????????????????????????
    gzip: true,
    timeout: 5000,
    resolveWithFullResponse: true,
    simple: false
  })

  return doRequest.then(function (res) {
    return scrapeMetadata(htmlDecode(res.body, res.headers), url, opts)
  })
}
