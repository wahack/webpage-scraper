const request = require('request')

module.exports = function (result, html) {
  request({
    method: 'POST',
    uri: `https://api.leancloud.cn/1.1/classes/entry`,
    headers: {
      'X-LC-Id': 'K85Rtaf7zSDd4WjcLWyMObr5-gzGzoHsz',
      'X-LC-Key': 'L3WhhK3rrPeUW6X0MeOVFYFQ',
      'Content-Type': 'application/json'
    },
    json: true,
    body: Object.assign({}, result, {html})
  })
}
