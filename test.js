const scraper = require('./')

// https://zhuanlan.zhihu.com/p/30563476
// www.ui.cn/detail/300254.html
// https://mp.weixin.qq.com/s/m1Oz3XRHMzHeAnf6eySQBA
// https://mp.weixin.qq.com/s/JGWy077cIpg9lrVCvDMoTg
scraper('https://segmentfault.com/a/1190000011153487')
  .then(r => {
    console.log(r)
  })
