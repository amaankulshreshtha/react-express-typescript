const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpack = require('clean-webpack-plugin');

const FRONTENDSRC = path.resolve(__dirname, 'frontend/src');

module.exports = {
  target: 'web',
  // @babel/polyfill is needed to use modern js functionalities in old browsers.
  entry: ['@babel/polyfill', path.resolve(FRONTENDSRC, 'index.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-fe.js'
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
        test: /\.scss$|.sass/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    modules: ['node_modules', FRONTENDSRC],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(FRONTENDSRC, 'index.html')
    }),
    new CleanWebpack(['./dist/bundle-be.js', './dist/index.html'])
  ],
  watch: true,
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
