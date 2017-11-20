const sites = require('./website_list.json').sites
let result = []
const fs = require('fs')
function getClassOrId (str) {
  let arrs = str.trim().replace(/['"<>]/g, '').replace(/ /ig, '=').split('=')
  if (arrs.length > 3) console.log(str)
  if (arrs[1] === 'id') {
    if (!arrs[2]) console.log('sdfsdlf')
    return '#' + arrs[2]
  }
  return `[['${arrs[0]}${arrs[1] === 'class' ? '.' : ''}${arrs[2] || ''}']]`
}

function get (value) {
  if (!value) return console.log('null')
  if (value[0] === '[') {
    return value
  } else {
    return getClassOrId(value)
  }
}

function clearHttp (url) {
  if (url.substr(0, 8) === 'https://') return url.substr(8)
  if (url.substr(0, 7) === 'http://') return url.substr(7)
  return url
}
console.time('sf')
sites.forEach(site => {
  let resultSite = {}
  resultSite.name = site.name
  if (site.title) resultSite.title = get(site.title)
  if (site.desc) resultSite.about = get(site.desc)
  if (site.include) resultSite.article = get(site.include)
  resultSite.url = clearHttp(site.url)
  result.push(resultSite)
})
console.timeEnd('sf')
// sites.find(item => item.name === 'ui.cn')

fs.writeFileSync('./utils/meta-scraper/site-rules/sites.json', JSON.stringify(result, null, 2))
