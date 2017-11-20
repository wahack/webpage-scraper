const Promise = require('bluebird')

function sumAsync (isReject) {
  console.log('run sumAsync')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isReject) return reject(new Error('sumAsync Rejected'))
      return resolve('sumAsync resolve')
    }, 1000)
  })
}

function addAsync (isReject) {
  console.log('run  addasync')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isReject) return reject(new Error('addAsync Rejected'))
      return resolve('addAsync resolve')
    }, 1000)
  })
}

// Promise.all([
//   sumAsync(),
//   addAsync()
// ]).then(result => {
//   console.log('promise all', result)
// })

// Promise.all([
//   sumAsync(),
//   addAsync()
// ]).spread(result => {
//   console.log('promise spread', result)
// })

// Promise.all([
//   sumAsync(false),
//   addAsync()
// ]).map(function (item) {
//   console.log(item)
// }).then(result => {
//   console.log('promise all', result)
// })

// Promise.join(sumAsync(true), function(a){
//   console.log(a)
// }).then((result) => {
//   console.log(result)
// })

// let i = 0
// Promise.map([sumAsync, addAsync], function (fn) {
//   return fn(i++).catch(e => {
//     return sumAsync(true)
//   })
// }).then(results => {
//   console.log(results)
// })

// Promise.each([addAsync, sumAsync], function(fn) {
//   return fn(true).catch(e => {
//     return Promise.resolve(1)
//   })
// }).then(result => {
//   console.log(result[0])
// })

const scraper = require('./')
const fs = require('fs')
// const TestLogger = require('./utils/logger').test()

// TestLogger.info({name: 'logi', msg: '用户登录', id: '12112'})
// TestLogger.warn('啊note人', {hhhh: 1})
// TestLogger.error(new Error('sdfsd'))

// https://mp.weixin.qq.com/s?__biz=MTI0OTM2NDUwMQ==&mid=2653463013&idx=1&sn=caa12f28562a77683bb3333a05fe7a74&chksm=79943c9f4ee3b5893a98ea8d3781558e66ae155b379cfd423a73a610b5698208d35992db1b0d&scene=0&key=73b938db81aca5b3d5883c7cc52f153539bd4e1134f0db067f2c841abcf45e138ea66b6221a58bc9602eca231d0f5c8854881f827d598cb94a89df84c1af1947707cc8870f56dd5acfad3ee525cffdd6&ascene=0&uin=MTI4MTUwMTg2Mg%3D%3D&devicetype=iMac+MacBookPro12%2C1+OSX+OSX+10.12.6+build(16G29)&version=12020810&nettype=WIFI&fontScale=100&pass_ticket=MvftxFiwACLsr%2FAkQaDJtAmtrxa%2BFubOtq8q%2F12l9KA9j7t3VHUa3vWGcsi23uzM
// http://weibo.com/ttarticle/p/show?id=2309614139515827627882#related
// https://mp.weixin.qq.com/s?__biz=MjM5MzYwNTI2MQ==&mid=2649447046&idx=1&sn=9505a0fe59c0864507c90b28ea7b73ac&chksm=be8b896489fc00728b68435a4dffca0831d59569dc3273464f0036a91a9ba185eb9810abaa17&scene=0&key=5bc881ac3c593efc0c1390def31bfaf0b3451b5bb652ea8f88688dcb8d0ff301881335159c7860dfe60e6c6cacac01fb68f0da9c05945365befb76f54589b627713481daa6db91a832fa3b44af4e1611&ascene=0&uin=MTI4MTUwMTg2Mg%3D%3D&devicetype=iMac+MacBookPro12%2C1+OSX+OSX+10.12.6+build(16G29)&version=12020810&nettype=WIFI&fontScale=100&pass_ticket=5ayxKPZkxrV7R2Qs2rW2D8QMPwbKweZl2j4CnJ8ZHtAbzAR%2BmFPrQSPCkkucuAv4
// https://aotu.io/notes/2017/08/14/fix-sprite-anim/
scraper('http://lizhenliang.blog.51cto.com/7876557/1730892', {
  scrapArticle: true
}).then(r => {
  // delete r.html
  // console.log(convert.convertFromHTML(r.article, (html) => {
  //   return cheerio.load(html).root
  // }))
  // const convertFromHtml = require('./utils/convertFromHtml')
  // const convertToHtml = require('./utils/rawToNodes')
  // console.log(convertFromHtml(r.article).blocks[1])
  // fs.writeFileSync('te.html', JSON.stringify(convertToHtml(convertFromHtml(r.article)), null, 2))
  // r.article
  console.log(r)
}).catch(e => {
  console.log(e)
})
