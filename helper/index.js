/**
 * 函数工具库
 */
const pick = require('lodash/pick')
const URI = require('urijs')

module.exports = {
   /** 去除微信文章链接中不必要的参数 */
  cleanWechatUrl (url) {
    if (~url.indexOf('__biz') && ~url.indexOf('mid') && ~url.indexOf('idx')) {
      let query = new URI(url).query()
      query = URI.parseQuery(query)
      query = pick(query, ['__biz', 'mid', 'idx', 'sn'])
      return `https://mp.weixin.qq.com/s?__biz=${query.__biz}&mid=${query.mid}&idx=${query.idx}&sn=${query.sn}`
    }
    return url
  }
}
