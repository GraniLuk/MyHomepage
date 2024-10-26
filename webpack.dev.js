const path = require('path');
const common = require("./webpack.common.js");
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  devtool: "source-map",
  mode: "development",

  devServer: {
    port: 8080,
    static: {
      directory: path.join(__dirname, 'src'),
    },
    historyApiFallback: true, // Optional, if using React Router or similar
    hot: true, // Enables Hot Module Replacement
  },
});
