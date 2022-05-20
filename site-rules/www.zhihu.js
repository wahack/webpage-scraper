const values = require('lodash/values')
// const notify = require('jzz-server/notify')
// const cheerio = require('cheerio')

function extractData ($, url) {
  if ($.__post_data) return $.__post_data
  // console.log($('#preloadedState').text())
  // console.log($('#js-initialData').html())
  let data = JSON.parse($('#js-initialData').html()).initialState.entities
  $.__post_data = {
    question: values(data.questions)[0],
    answers: values(data.answers)
  }
  // if (!$.__post_data.question.title) notify.error('文章抓取警告', '知乎问答爬取错误:question', url)
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
    return extractData($, url).question.title
  },
  link ($, url) {
    return 'https://www.zhihu.com/question/' + extractData($, url).question.id
  },
  image ($) {
    return ''
  },
  about ($) {
    return $(extractData($).question.excerpt).text() || ''
  },
  article ($, url) {
    let data = extractData($, url)
    let question = data.question
    let answers = data.answers.map(answer => {
      return `<p style="color:#607fa6;margin:20px auto;">@${answer.author.name}的回答</p><div>${answer.content}</div>`
    }).join('<br/>')
    return `<p>${question.detail}</p><br/>${answers}`.replace(/<\/?noscript>/g, '')
  },
  publisher ($, url) {
    return {
      name: '知乎问答',
      host: 'www.zhihu.com',
      // 知乎ogo
      logo: 'https://www.zhihu.com/favicon.ico'
    }
  }
}
