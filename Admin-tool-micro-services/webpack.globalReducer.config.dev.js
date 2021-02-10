/* eslint-env node */
const config = require('./webpack.globalReducer.config.js');
const webpack = require('webpack');

config.plugins.push(new webpack.NamedModulesPlugin());
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.devServer = {
  contentBase: './public',
  historyApiFallback: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  proxy: {}
}

config.mode = 'development'

module.exports = config;