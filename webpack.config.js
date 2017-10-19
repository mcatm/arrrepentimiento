"use strict";

const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
  entry: "./src/js/app.js",
  output: {
    path: __dirname + "/www/html/js",
    filename: "app.js"
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}];