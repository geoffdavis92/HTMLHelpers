const path = require("path");
const webpack = require("webpack");

const source = function(dir) {
  return __dirname + "/source/" + dir;
};
const dest = function(dir='') {
  return __dirname + "/dist/" + dir;
};

const isDev = process.env.NODE_ENV === "development" ? true : false;

module.exports = {
  entry: source("index.js"),
  output: {
    path: dest(),
    filename: "index.js?hash=[hash]"
  },
  watch: false,
  resolve: {
    alias: {
      classes: path.resolve(__dirname, "source/classes"),
      functions: path.resolve(__dirname, "source/functions"),
      helpers: path.resolve(__dirname, "source/_helpers"),
      types: path.resolve(__dirname, "source/types"),
      tests: path.resolve(__dirname, "source/tests"),
      utilities: path.resolve(__dirname, "source/utilities"),
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: isDev
    ? []
    : [
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false,
            drop_console: false
          }
        })
      ]
};