var path = require("path");
var SRC_DIR = path.join(__dirname, "client/src");
var DIST_DIR = path.resolve(__dirname, "client/dist");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: {loader: "css-loader"}
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};