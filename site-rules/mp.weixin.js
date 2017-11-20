const URI = require('urijs')
const pick = require('lodash').pick
const maxBy = require('lodash').maxBy
const funs = require('../helper')

module.exports = {
  title ($, url) {
    let title = $('#activity-name').text().trim()
    if (!title) {
      console.error('异常来自meta-scraper:site-rules:mp.weixin:title')
    }
    return title
  },
  link ($, url) {
    return funs.cleanWechatUrl(url)
  },
  image ($) {
    // 获取前三张图中最大一张图片
    let target = maxBy($('#js_content img').slice(0, 3), function (el) {
      return Math.pow(el.attribs['data-w'] || 0, 2) * el.attribs['data-ratio']
    })
    let src = target && (target.attribs['data-src'] || target.attribs['src'])
    if (src && /mmbiz\.qpic\.cn/.test(src)) src = src.replace(/&?tp=webp/, '')
    return src || ''
  },
  about ($) {
    return $('#js_content').text().substr(0, 500).replace(/\n|\t|\r|\f/g, '').trim()
  },
  article ($) {
    let $content = $('#js_content')
    // 去除公号图片的webp参数, 避免ios下不显示
    $content.find('img').each(function () {
      let src = $(this).attr('data-src')
      if (src && /mmbiz\.qpic\.cn/.test(src)) {
        src = src.replace(/&?tp=webp/, '')
        $(this).attr('src', src)
      }
    })
    return $content.html()
  },
  publisher ($, url) {
    let query = new URI(url).query()
    query = URI.parseQuery(query)
    query = pick(query, ['__biz', 'mid', 'idx', 'sn'])
    if (!query || !query.__biz) {
      try {
        query = new Function(`${$('head script').eq(1).html().replace('window', 'new Object({})')};return {__biz: biz, sn: sn, mid:mid, idx:idx}`)()
      } catch (e) {}
    }
    return {
      qrcode: `https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=320&__biz=${query.__biz}&mid=${query.mid}&idx=${query.idx}&sn=${query.sn}`,
      // 公众号的名字
      name: '微信公众号',
      authorName: $('#js_profile_qrcode  .profile_nickname').text(),
      // 微信logo
      avatar: 'https://res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/common/favicon22c41b.ico',
      // 来源
      source: 'wechat',
      // 公众号id
      wechatId: $('#js_profile_qrcode .profile_meta_value').eq(0).text(),
      // 公号描述
      describe: $('#js_profile_qrcode .profile_meta_value').eq(1).text()
    }
  }
}
