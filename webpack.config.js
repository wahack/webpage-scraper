// const webpack = require('webpack')
// const Uglify = require('uglifyjs-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    extractor: './extractor.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    library: 'Extractor',
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: true
  }
}
