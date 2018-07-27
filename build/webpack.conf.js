const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  mode: "development",
  devtool: 'cheap-module-eval-source-map',

  devServer: {
    hot: true,
    contentBase: false,
    compress: true,
    host: "localhost",
    port: "8080",
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
};