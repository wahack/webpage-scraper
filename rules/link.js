/**
 * Wrap a rule with validation and formatting logic.
 *
 * @param {Function} rule
 * @return {Function} wrapped
 */

function wrap(rule) {
  return function ($, url) {
    var value = rule($, url);
    if (typeof value != 'string') return

    // make sure it's a url
    value = value.trim()
    return value
  };
}

/**
 * Rules.
 */

module.exports = [wrap(function ($, url) {
  return url
})]
