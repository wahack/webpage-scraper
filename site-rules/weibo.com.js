const URL = require('url')
const notify = require('jzz-server/notify')

module.exports = {
  title ($, url) {
    let title = $('.main_editor ').find('.title').text().trim()
    if (!title) {
      notify.error('文章抓取警告', '微博爬取错误:article', url)
    }
    return title
  },
  link ($, url) {
    let parsed = URL.parse(url)
    return `https://weibo.com${parsed.path}`  // remove hash
  },
  image ($) {
    return $('.main_toppic img').attr('src')
  },
  about ($) {
    return $('.WB_editor_iframe').text().substr(0, 300).replace(/\n|\t|\r|\f/g, '').trim()
  },
  article ($) {
    let $content = $('.WB_editor_iframe')
    return $content.html()
  },
  publisher ($, url) {
    let $authorBlock = $('.authorinfo .W_autocut')
    return {
      name: '微博文章',
      host: 'media.weibo.cn',
      // 微博logo
      logo: 'https://weibo.com/favicon.ico',
      author_name: $authorBlock.text().trim(),
      author_avatar: $authorBlock.find('img').attr('src')
    }
  }
}
