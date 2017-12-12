const URI = require('urijs')
/**
 * Wrap a rule with validation and formatting logic.
 *
 * @param {Function} rule
 * @return {Function} wrapped
 */

function wrap (rule) {
  return function ($, url) {
    return rule($, url)
  }
}

/**
 * Rules.
 */

module.exports = [wrap(function ($, url) {
  let favicon = $('link[rel="icon"]').attr('href') || $('link[rel="shortcut icon"]').attr('href') || '/favicon.ico'
  favicon = (new URI(favicon).absoluteTo(url)).href()
  url = new URI(url)
  return {
    name: url.subdomain() === 'www' ? url.domain() : url.hostname(),
    logo: favicon,
    host: url.hostname()
  }
})]
