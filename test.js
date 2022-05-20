const scraper = require('./')
// https://segmentfault.com/a/1190000011153487
// https://zhuanlan.zhihu.com/p/30563476
// https://www.zhihu.com/question/59949917
// www.ui.cn/detail/300254.html
// https://mp.weixin.qq.com/s/m1Oz3XRHMzHeAnf6eySQBA
// https://mp.weixin.qq.com/s/JGWy077cIpg9lrVCvDMoTg
scraper('https://mp.weixin.qq.com/s/GT1P-bj5ljlEgrj6QyxK7w', {scrapArticle: false})
  .then(r => {
    console.log(r)
  })
