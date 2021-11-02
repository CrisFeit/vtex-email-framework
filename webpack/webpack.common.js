const { join } = require('path')

module.exports = {

  entry: join(__dirname,'src'),

  module: {
    rules: [
      {
        test: /\.js$/,
      },
    ]
  }
}