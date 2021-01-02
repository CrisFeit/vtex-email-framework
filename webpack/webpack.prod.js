const fs = require('fs')
const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;
const templateFiles = fs.readdirSync(path.resolve('app','templates')).filter(folder => folder != 'models');

module.exports = merge(common, {
  output: {
    path: path.resolve('app','dist'),
  },
  mode: 'production',

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    ...templateFiles.map(file =>{
      return new HtmlWebpackPlugin({
      filename: file,
      template: `app/templates/${file}`,
      inject:false,
      minify: false
      })
    }),
    new HTMLInlineCSSWebpackPlugin(),
  ],

  module: {
    rules: [
        {
          test: /\.(sa|sc|c|s)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader',
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
              },
            },
          ]
        }
    ]
}
})