const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require('path');

module.exports = merge(common, {
  devtool: "source-map",
  mode: "development",

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [ // Change 'loader' to 'use'
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [ // Change 'loader' to 'use'
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
    static: {
      directory: path.join(__dirname, 'public'), // Adjust as needed
    },
    historyApiFallback: true, // Optional, if using React Router or similar
    hot: true, // Enables Hot Module Replacement
  },
});