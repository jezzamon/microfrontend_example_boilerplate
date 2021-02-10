/* eslint-env node */
const webpack = require('webpack')
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const mfConfig = require('./microfrontendConfig.json');

module.exports = {
  entry: {
    entry: path.resolve(__dirname, 'src/entry.js'),
    store: path.resolve(__dirname, 'src/store.js'),
    config: path.resolve(__dirname, 'src/config.json')
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, `./../public/${mfConfig.name}`),
    libraryTarget: 'amd',
    library: 'mfComponent',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [
                  // eslint-disable-next-line global-require
                  require('autoprefixer'),
                ];
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'node_modules')],
        exclude: [/\.krem.css$/],
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.krem.css$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: [
          {
            loader: 'kremling-loader',
            options: {
              namespace: 'authentication',
              postcss: {
                plugins: {
                  autoprefixer: {},
                },
              },
            },
          },
        ],
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
    new CleanWebpackPlugin(['./public/authentication/entry.js']),
    // new CopyWebpackPlugin([
    //   { from: path.resolve(__dirname, 'src/entry.js') },
    // ]),
  ],
  devtool: 'source-map',
  externals: [
    /^@portal\/*/,
    /^lodash$/,
    /^single-spa$/,
    /^rxjs\/?.*$/,
    // /^react$/,
    // /^redux$/,
    // /^axios$/,
    // /^react-redux$/,
    // /^react\/lib.*/,
    // /^react-dom$/,
    // /.*react-dom.*/,
  ],
};
