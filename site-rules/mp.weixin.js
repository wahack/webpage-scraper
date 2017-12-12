const URI = require('urijs')
const pick = require('lodash').pick
const maxBy = require('lodash').maxBy
const funs = require('../helper')
const notify = require('jzz-server/notify')

module.exports = {
  title ($, url) {
    let title = $('#activity-name').text().trim()
    if (!title) {
      notify.error('文章抓取警告', '公众号爬取错误', url)
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
    let $profile = $('#js_profile_qrcode')
    return {
      author_link: `https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=320&__biz=${query.__biz}&mid=${query.mid}&idx=${query.idx}&sn=${query.sn}`,
      name: '微信公众号',
      host: 'mp.weixin.qq.com',
      author_name: $profile.find('.profile_nickname').text(),
      // 微信logo
      avatar: 'https://res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/common/favicon22c41b.ico',
      // 公众号id
      authorid: $profile.find('.profile_meta_value').eq(0).text(),
      // 公号描述
      author_bio: $profile.find('.profile_meta_value').eq(1).text()
    }
  }
}
