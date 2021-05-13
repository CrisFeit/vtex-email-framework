const { join } = require('path')

module.exports = {
  entry: join(__dirname,'src'),
  stats: 'errors-only',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
      },
    ]
  }
}