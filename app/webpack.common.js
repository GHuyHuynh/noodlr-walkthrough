const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { optimize } = require('webpack');

module.exports = {
  entry: {
    contentScript: path.resolve('src/index.ts'),
  },
  module: {
    rules: [
      {
        use: 'ts-loader',
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
      }
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { 
          from: path.resolve('src/assets/manifest.json'), 
          to: path.resolve('dist')
        },
        { 
          from: path.resolve('src/assets/icon.png'), 
          to: path.resolve('dist/assets')
        },
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'Noodlr Walkthrough',
      filename: 'index.html',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  output: {
    filename: 'contentScript.js',
    path: path.resolve('dist'),
  },
  optimization: {
    splitChunks: {
      chunks(chunk) {
        return chunk.name !== 'contentScript';
      }
    }
  }
};