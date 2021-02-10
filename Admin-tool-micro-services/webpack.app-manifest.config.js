const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/app-manifest.js',
  output: {
    filename: 'app-manifest.js',
    path: path.resolve(__dirname, 'build/app-manifest'),
    chunkFilename: '[name].js',
  },
  mode: 'production',
  node: {
    fs: 'empty',
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules',
    ],
  },
  devtool: 'sourcemap',
  plugins: [
    new CleanWebpackPlugin(['public/app-manifest/']),
    CopyWebpackPlugin([
      {from: path.resolve(__dirname, 'src/app-manifest.js')}
    ]),
  ],
  module: {
    rules: [
      {parser: {System: false}},
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}
