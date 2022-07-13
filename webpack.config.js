const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    static: "./build",
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(jpg|mp4)$/,
        use: ["file-loader"],
      },
      {
        test: /\.svg$/,
        use: ["svg-inline-loader"],
      },
      {
        test: /\.mp4$/,
        use: ["url-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      "~": path.resolve("./src"),
      react: "preact/compat",
      "react-dom": "preact/compat",
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "Dan Suh",
      template: "index.html",
    }),
  ],
};
