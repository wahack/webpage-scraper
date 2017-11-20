const request = require('request-promise')
const notify = require('jzz-server/notify')
const cheerio = require('cheerio')

module.exports = function (url) {
  let id = (url.match(/toutiao\.com\/([^\\/]+)/) || [])[1]
  if (!id) {
    notify.error('文章抓取警告', '今日头条id为空', url)
    return Promise.reject({})
  }
  id = id[0] === 'a' ? `i${id.substr(1, id.length)}` : id
  return request({
    url: `https://m.toutiao.com/${id}/info/`,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36',
      'Accept-Encoding': 'gzip'
    },
    jar: true,
    // 设置gzip，handle客户端未指定压缩编码但是服务端却仍然以压缩形式返回的情况
    gzip: true,
    timeout: 5000,
    resolveWithFullResponse: true,
    simple: false
  }).then(function (res) {
    let body
    try {
      body = JSON.parse(res.body)
      if (body.success) {
        let data = body.data
        return Promise.resolve({
          title: data.title,
          link: data.url,
          article: data.content,
          about: cheerio.load(data.content.substr(0, 250)).text().trim(),
          image: (data.content.match(/<img src="([^"]+)"/) || [])[1],
          publisher: {
            authorName: data.media_user.screen_name,
            authorAvatar: data.media_user.avatar_url,
            name: '今日头条',
            source: 'toutiao',
            sourceText: '今日头条',
            avatar: 'https://www.toutiao.com/favicon.ico'
          }
        })
      }
      notify.error('文章抓取警告', '今日头条返回success值不为true', res.body)
      return Promise.reject({})
    } catch (error) {
      notify.error('文章抓取警告', '今日头条解析body失败', res.body)
      return Promise.reject({})
    }
  })
}
