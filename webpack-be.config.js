const path = require('path');
const CleanWebpack = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const BACKENDSRC = path.resolve(__dirname, 'backend/src');

module.exports = {
  target: 'node',
  // @babel/polyfill is needed to use modern js functionalities in old browsers.
  entry: ['@babel/polyfill', path.resolve(BACKENDSRC, 'index.ts')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-be.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
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
      }
    ]
  },
  resolve: {
    modules: ['node_modules', BACKENDSRC],
    extensions: ['.js', 'web.js', 'webpack.js', '.ts', '.tsx']
  },
  plugins: [new CleanWebpack(['./dist/bundle-be.js'])],
  watch: true,
  externals: [nodeExternals()],
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    proxy: {
      '/': 'http://localhost:7000'
    }
  }
};
