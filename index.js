const commonRules = require('./rules')
const siteRules = require('./site-rules')
const cheerio = require('cheerio')
const _ = require('lodash')
const request = require('request-promise')
const store = require('./store')
const htmlDecode = require('./html-decode')
const FileCookieStore = require('tough-cookie-filestore')
const path = require('path')
var localJar = request.jar(new FileCookieStore(path.resolve(__dirname, './cookies.json')))
const config = require('./config')
const URL = require('url')
const customScraper = require('./custom')
const XmlEntities = require('html-entities').XmlEntities

function injectPlugins ($) {
  $.prototype.exclude = function (selector) {
    this.find(selector).remove()
    return this
  }
}

function scrapeMetadata (html, url, opts = {}) {
  let rules = _.mergeWith({}, commonRules, siteRules(url), (src, newVal) => {
    if (!src || !newVal) return src || newVal
    if (_.isArray(newVal)) return newVal.concat(src)
    if (_.isFunction(newVal)) return [newVal].concat(src)
  })
  if (!opts.scrapArticle) rules = _.omit(rules, 'article')
  var keys = Object.keys(rules)
  var $ = cheerio.load(html)
  injectPlugins($)
  var promises = keys.map(function (key) {
    return scrapeMetadatum($, url, rules[key])
  })
  return Promise.all(promises).then(function (values) {
    let result = keys.reduce(function (memo, key, i) {
      memo[key] = values[i]
      return memo
    }, {})
    store(result, html)
    delete result.extra
    return result
  })
}
/**
 * 获取第一个非空的值
 */
function scrapeMetadatum ($, url, rules) {
  if (!Array.isArray(rules)) rules = [rules]
  return rules.reduce(function (promise, rule) {
    return promise.then(function (value) {
      if (value != null) return value
      var next = rule($, url)
      if (next != null) return next
      return null
    })
  }, Promise.resolve())
}
/**
 * TODO:
 *   突破部分网站521状态码的防爬：https://wequant.io/study/intro.system.html
 */
module.exports = function (url, opts) {
  if (!url) return Promise.reject(new Error('url为空'))
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
    // 这里encoding参数设置为 null，否则它会默认用字符串方式（toString('utf-8')）转换内容, 从而破坏原始内容数据
    encoding: null,
    jar: config.cookie[URL.parse(url).host] ? localJar : true,
    // 设置gzip，handle客户端未指定压缩编码但是服务端却仍然以压缩形式返回的情况
    gzip: true,
    timeout: 5000,
    resolveWithFullResponse: true,
    simple: false
  })

  return doRequest.then(function (res) {
    return scrapeMetadata(htmlDecode(res.body, res.headers), url, opts)
  })
}
