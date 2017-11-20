'use strict'

/**
 * Wrap a rule with validation and formatting logic.
 *
 * @param {Function} rule
 * @return {Function} wrapped
 */

function wrap (rule) {
  return function ($) {
    var value = rule($)
    if (typeof value !== 'string') return

    // remove extra whitespace
    value = value.replace(/\s+/g, ' ')
    value = value.trim()

    return value
  }
}

/**
 * Rules.
 */

module.exports = [wrap(function ($) {
  return $('meta[property="og:title"]').attr('content')
}), wrap(function ($) {
  return $('meta[name="twitter:title"]').attr('content')
}), wrap(function ($) {
  return $('title').text()
})]
