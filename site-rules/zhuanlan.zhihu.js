// const notify = require('jzz-server/notify')
// const cheerio = require('cheerio')

function extractData ($, url) {
  if ($.__post_data) return $.__post_data
  // console.log($('#preloadedState').text())
  // let data = JSON.parse($('#preloadedState').text().replace(/"([a-zA-Z]+)":new Date\(("[^"]+")\),/g, '"$1":$2,'))
  let data = JSON.parse($('#js-initialData').html()).initialState.entities
  $.__post_data = {
    post: data.articles[Object.keys(data.articles)[0]],
    user: data.users[Object.keys(data.users)[0]]
  }
  // if (!$.__post_data.post.content) notify.error('文章抓取警告', '知乎专栏爬取错误:article', url)
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
    return extractData($, url).post.title
  },
  link ($, url) {
    return extractData($, url).post.url
  },
  image ($) {
    return extractData($).post.titleImage || ''
  },
  about ($) {
    return $(extractData($).post.excerpt).text() || ''
  },
  article ($) {
    return extractData($).post.content.replace(/<\/?noscript>/g, '')
  },
  publisher ($) {
    let author = extractData($).user
    return {
      name: '知乎专栏',
      // 知乎ogo
      logo: 'https://www.zhihu.com/favicon.ico',
      host: 'zhuanlan.zhihu.com',
      // 来源
      author_name: author.name,
      author_avatar: author.avatarUrl,
      author_bio: author.headline,
      author_link: 'https://zhuanlan.zhihu.com' + author.url
    }
  }
}
