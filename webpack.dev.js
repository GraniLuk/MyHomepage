const path = require('path');
const common = require("./webpack.common.js");
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader", // Injects CSS into the DOM
          {
            loader: "css-loader",
            options: {
              url: true,
            }
          },
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  devServer: {
    port: 8080,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true,
    hot: true,
    open: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  output: {
    publicPath: '/',
  },
});
