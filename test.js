const scraper = require('./')

// https://zhuanlan.zhihu.com/p/30563476
// www.ui.cn/detail/300254.html
scraper('https://mp.weixin.qq.com/s/m1Oz3XRHMzHeAnf6eySQBA')
  .then(r => {
    console.log(r)
  })
