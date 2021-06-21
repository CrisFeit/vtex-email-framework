const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',

  devServer: {
    hotOnly: true,
    liveReload: false,
    open: true,
    watchOptions: {
      ignored: /node_modules/
    }
  },

  plugins: [
    new HtmlWebpackPlugin(),
    new StylelintPlugin({
      fix: true,
    })
  ],

  module: {
    rules: [
      {
        test: /\.(sa|sc|c|s)ss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
    ]
  }
})