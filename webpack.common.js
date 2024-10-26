const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/index.js",
    another: "./src/js/another.js",
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
    publicPath: '/', // Explicitly set publicPath
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "public" }],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/tydzien3.html",
      inject: true,
      chunks: ["index"],
      filename: "tydzien3.html",
      publicPath: '/', // Ensures that your assets are served from the root URL
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/tydzien4.html",
      inject: true,
      chunks: ["index"],
      filename: "tydzien4.html",
      publicPath: '/', // Ensures that your assets are served from the root URL
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/tydzien5.html",
      inject: true,
      chunks: ["index"],
      filename: "tydzien5.html",
      publicPath: '/', // Ensures that your assets are served from the root URL
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/tydzien6.html",
      inject: true,
      chunks: ["index"],
      filename: "tydzien6.html",
      publicPath: '/', // Ensures that your assets are served from the root URL
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/tydzien7.html",
      inject: true,
      chunks: ["index"],
      filename: "tydzien7.html",
      publicPath: '/', // Ensures that your assets are served from the root URL
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/tydzien8.html",
      inject: true,
      chunks: ["index"],
      filename: "tydzien8.html",
      publicPath: '/', // Ensures that your assets are served from the root URL
    })
  ],
};
