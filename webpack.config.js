const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
 entry: {
 index: './src/index.jsx',
 },
 mode:  'production',
 module: {
  rules: [
    {
      test: /\.jsx?$/,
      use: ['babel-loader'],
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
  ],
 },
 resolve: {
  extensions: ['.tsx', '.ts', '.js'],
 },
 plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
 output: {
  filename: '[name].bundle.js',
  path: __dirname + '/dist',
 },
 devServer: {
  static: {
    directory: path.join(__dirname, 'dist'),
  },
  compress: true,
  port: 9000,
  hot: true,
 },
//  optimization: {
//  runtimeChunk: 'single',
// },
// optimization: {
//  splitChunks: {
//    chunks: 'all',
//  },
// },
};
