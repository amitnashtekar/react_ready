const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const dotenv = require("dotenv").config({
  path: path.join(__dirname, ".env"),
});

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": dotenv.parsed,
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Clothy",
      template: "./src/index.html",
    }),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        query: {
          name: "assets/[name].[hash].[ext]",
        },
      },
    ],
  },
};
