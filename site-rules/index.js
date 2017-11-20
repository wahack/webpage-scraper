const URL = require('url')
const sites = require('./sites')
const minimatch = require('minimatch')
const _ = require('lodash')
const notify = require('jzz-server/notify')
const config = {
  'mp.weixin.qq.com': require('./mp.weixin'),
  'zhuanlan.zhihu.com': require('./zhuanlan.zhihu'),
  'www.zhihu.com': require('./www.zhihu'),
  'media.weibo.cn': require('./media.weibo')
}
/**
 * [[{express}]] 带执行结果的表达式
 * [['express']] 符合jquery语法的待执行的表达式
 */
function getValueFn ($, value, type = 'text', deep = false) {
  if (value[0] === '[') {
    let express = value.substring(3, value.length - 3)
    try {
      if (value[2] === "'") return $(express)[type]().trim()
      // console.log(new Function(`return ${express}`)($))
      return new Function('$', `return ${express}`)($)
    } catch (e) {
      return ''
    }
  }
  if (typeof value === 'function') return value($)
  if (typeof value === 'object') {
    for (let key in value) {
      value[key] = getValueFn($, value[key])
    }
    return value
  }
  return value
}

module.exports = function (url) {
  let urlParsed = URL.parse(url)
  if (config[urlParsed.hostname]) return config[urlParsed.hostname]
  let targetSite = sites.find(site => {
    if (/\*/.test(site.url)) {
      return minimatch(`${urlParsed.hostname}${urlParsed.path}`, site.url)
    }
    return !!~url.indexOf(site.url)
  })
  if (!targetSite) {
    notify.error('文章抓取警告', '未匹配url', url)
    return null
  }
  let result = {}
  let t = _.omit(targetSite, ['name', 'url'])
  for (let key in t) {
    result[key] = function ($, url) {
      let value = getValueFn($, t[key], key === 'article' ? 'html' : 'text')
      if (!value) notify.error('文章抓取警告', `抓取${targetSite.name}失败:${key}`, url)
      return value
    }
  }
  return result
}
