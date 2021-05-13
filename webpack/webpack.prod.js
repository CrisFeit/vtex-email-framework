const { readdirSync } = require('fs')
const { resolve } = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;
const templateFiles = readdirSync(resolve('emails','templates')).filter(folder => /.hbs$/gi.test(folder));
const partialsFiles = readdirSync(resolve('emails','templates','partials')).filter(folder => /.hbs$/gi.test(folder));

module.exports = merge(common, {
  output: {
    path: resolve('emails','dist'),
  },
  mode: 'production',

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HTMLInlineCSSWebpackPlugin(),
    ...templateFiles.map(file =>{
      return new HtmlWebpackPlugin({
      filename: file,
      template: `emails/templates/${file}`,
      inject:false,
      minify: false
      })
    }),
    ...partialsFiles.map(partial => {
      return new HtmlWebpackPartialsPlugin({
        path: `emails/templates/partials/${partial}`,
        location:  partial.replace(/.hbs/gi,''),
        priority: 'replace',
        template_filename: [...templateFiles]
      })
    }),
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