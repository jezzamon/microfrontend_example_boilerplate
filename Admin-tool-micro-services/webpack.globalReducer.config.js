/* eslint-env node */
const webpack = require('webpack')
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/globalReducer.js',
  output: {
    filename: 'globalReducer.js',
    path: path.resolve(__dirname, 'public/globalReducer'),
    libraryTarget: 'var',
    library: 'globalReducer',
  },
  mode: 'production',
  module: {
    rules: [
      {parser: {System: false}},
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules',
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['public/']),
    CopyWebpackPlugin([
      {from: path.resolve(__dirname, 'src/globalReducer.js')}
    ]),
  ],
  devtool: 'source-map',
  externals: [
    /^lodash$/,
    /^single-spa$/,
  ],
};

