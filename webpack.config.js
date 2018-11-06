const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // @babel/polyfill is needed to use modern js functionalities in old browsers.
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$|.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            // To process async functions.
            plugins: ['@babel/plugin-transform-async-to-generator']
          }
        },
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /.ts$/,
        loaders: ['ts-loader'],
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.scss$|.sass/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  watch: true,
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
