const path = require('path')

module.exports = {
  entry: path.join(__dirname,'src'),
  stats: 'errors-only',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
    ]
  }
}