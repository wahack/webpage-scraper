// const URI = require('urijs')
// const pick = require('lodash').pick
// const funs = require('../../funs')
// const notify = require('jzz-server/notify')

function extractData ($, url) {
  if ($.__post_data) return $.__post_data
  // console.log($('#preloadedState').text())
  let data = new Function(`${$('body script').eq(0).html().replace('location', 'new Object({href:"#"})')};return $render_data`)()
  $.__post_data = {
    title: data.title,
    article: data.content,
    user: data.userinfo,
    link: data.url,
    cover: data.config.cover_img
  }
  // if (!$.__post_data.title) notify.error('文章抓取警告', '微博爬取错误:article', url)
  return $.__post_data
}

// function decodeHtml (str) {
//   str = unescape(str.replace(/\\u/g, '%u'))
//   str = str.replace(/&#(x)?(\w+);/g, function ($, $1, $2) {
//     return String.fromCharCode(parseInt($2, $1 ? 16 : 10))
//   })
//   return str
// }

module.exports = {
  title ($, url) {
    return extractData($, url).title
  },
  link ($, url) {
    return extractData($, url).link
  },
  image ($, url) {
    return extractData($, url).cover
  },
  about ($, url) {
    return extractData($, url).article.substr(0, 120).replace(/<[a-z|/|\d]+>/g, '') + '...'
  },
  article ($, url) {
    return extractData($, url).article
  },
  publisher ($, url) {
    let author = extractData($, url).user
    return {
      name: '微博文章',
      host: 'media.weibo.cn',
      // 微博ogo
      logo: 'http://weibo.com/favicon.ico',
      // 来源
      author_name: author.name,
      author_avatar: author.profile_image_url,
      author_bio: author.description,
      authorid: author.idstr
    }
  }
}
