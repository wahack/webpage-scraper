'use strict';

const isUrl = require('is-url')
const URI = require('urijs')

/**
 * Wrap a rule with validation and formatting logic.
 *
 * @param {Function} rule
 * @return {Function} wrapped
 */

function wrap(rule) {
  return function ($, url) {
    var value = rule($);
    if (!isUrl(value)) return
    return (new URI(value).absoluteTo(url)).href()
  };
}

/**
 * Rules.
 */

module.exports = [wrap(function ($) {
  return $('meta[property="og:image:secure_url"]').attr('content');
}), wrap(function ($) {
  return $('meta[property="og:image:url"]').attr('content');
}), wrap(function ($) {
  return $('meta[property="og:image"]').attr('content');
}), wrap(function ($) {
  return $('meta[name="twitter:image"]').attr('content');
}), wrap(function ($) {
  return $('meta[property="twitter:image"]').attr('content');
}), wrap(function ($) {
  return $('meta[name="twitter:image:src"]').attr('content');
}), wrap(function ($) {
  return $('meta[property="twitter:image:src"]').attr('content');
}), wrap(function ($) {
  return $('article img[src]').first().attr('src');
}), wrap(function ($) {
  return $('#content img[src]').first().attr('src');
}), wrap(function ($) {
  return $('[class*="article"] img[src]').first().attr('src');
}), wrap(function ($) {
  return $('img[src]').first().attr('src');
})];