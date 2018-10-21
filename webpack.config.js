const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./public/dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: "eslint-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: "babel-loader"
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: "./public/",
    watchContentBase: true
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    // new webpack.optimize.UglifyJsPlugin()
  ]
};
