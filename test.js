const scraper = require('./')

// https://zhuanlan.zhihu.com/p/30563476
scraper('www.ui.cn/detail/300254.html')
  .then(r => {
    console.log(r)
  })
