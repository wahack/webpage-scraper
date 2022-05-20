const commonRules = require('./rules')
const siteRules = require('./site-rules')
const mergeWith = require('lodash/mergeWith')
const isArray = require('lodash/isArray')
const isFunction = require('lodash/isFunction')

function injectPlugins ($) {
  $.prototype.exclude = function (selector) {
    this.find(selector).remove()
    return this
  }
}

/**
 * 获取第一个非空的值
 */
function scrapeMetadatum ($, url, rules) {
  if (!isArray(rules)) rules = [rules]
  return rules.reduce(function (promise, rule) {
    return promise.then(function (value) {
      if (value != null) return value
      var next = rule($, url)
      if (next != null) return next
      return null
    })
  }, Promise.resolve())
}

function Extractor ($, url, rulesFn) {
  let rules = mergeWith({}, commonRules, siteRules(url), (src, newVal) => {
    if (!src || !newVal) return src || newVal
    if (isArray(newVal)) return newVal.concat(src)
    if (isFunction(newVal)) return [newVal].concat(src)
  })
  if (rulesFn) rules = rulesFn(rules)
  var keys = Object.keys(rules)
  injectPlugins($)
  var promises = keys.map(function (key) {
    return scrapeMetadatum($, url, rules[key])
  })
  return Promise.all(promises).then(function (values) {
    let result = keys.reduce(function (memo, key, i) {
      memo[key] = values[i]
      return memo
    }, {})
    delete result.extra
    return result
  })
}

if (typeof module === 'object') {
  module.exports = Extractor
}
