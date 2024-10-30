const path = require('path');
const common = require("./webpack.common.js");
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  devtool: "inline-source-map",
  mode: "development",

  devServer: {
    port: 8080,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true, // Optional, if using React Router or similar
    hot: true, // Enables Hot Module Replacement
    open: true,
    devMiddleware: {
      writeToDisk: true,  // This will write files to disk in dev mode
    },
  },
  output: {
    publicPath: '/',  // This is important for dev server
  },
});
