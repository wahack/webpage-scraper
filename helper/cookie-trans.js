const fs = require('fs')
const path = require('path')

fs.readFile(path.resolve(__dirname, './c.json'), 'utf-8', (err, data) => {
  let result = {}
  data = JSON.parse(data)
  data.forEach(item => {
    item.domain = item.domain.replace(/^\./, '')
    item.key = item.name
    if (!result[item.domain]) result[item.domain] = {}
    if (!result[item.domain][item.path]) result[item.domain][item.path] = {}
    result[item.domain][item.path][item.name] = item
  })
  fs.readFile(path.resolve(__dirname, './cookies.json'), 'utf-8', (err, data) => {
    data = JSON.parse(data || '{}')
    fs.writeFile(path.resolve(__dirname, './cookies.json'), JSON.stringify(Object.assign(data, result)))
  })
})
