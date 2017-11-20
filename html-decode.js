const iconv = require('iconv-lite')
const each = require('lodash').each
module.exports = function htmlDecode (htmlBuffer, headers) {
  let contentType = headers['content-type']
  let charset = ((contentType && contentType.match(/charset=(.*)/)) || [])[1]
  // 若在headers里没包含charset 则试图从html header）的 meta http-equiv 中查找
  // 为了提高查找效率，假定前2000个字符中包含了meta
  if (!charset) {
    each(htmlBuffer.toString().substr(0, 2000).match(/<meta\shttp-equiv="[^"]+"\scontent="([^"]+)"/g) || [], meta => {
      let matched = meta.match(/charset=([\S|^;|^"]+)/)
      if (matched && matched[1]) {
        charset = matched[1]
        return false
      }
    })
  }
  charset = charset || 'utf-8'
  let result
  try {
    result = iconv.decode(htmlBuffer, charset.toLowerCase())
  } catch (e) {
    result = result.toString('utf-8')
  }
  return result
}
