const path = require('path');
const WebpackHTMLPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devServer: {
    port: 8081,
  },
  plugins: [
    new WebpackHTMLPlugin({
      template: './public/index.html',
    }),
  ],
};
