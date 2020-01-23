const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: '../assets/',
  },
  module: {
    rules: [
      {
        test: /\.(css|less|sass|scss)$/,
        exclude: /node_modules/,
        use: [
          'style-loader', 'css-loader', 'sass-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  devtool: 'inline-source-map',
  target: 'web',
}