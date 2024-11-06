const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require('path');

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/index.js",
    another: "./src/js/another.js",
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
    publicPath: './', // Change this from '/' to './'
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
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              sources: false,
              preprocessor: (content, loaderContext) => {
                let result = content.replace(
                  /\$\{require\(['"]\.\.\/partials\/(.+)['"]\)\}/g,
                  (match, fileName) => {
                    const filePath = path.resolve(__dirname, 'src', 'partials', fileName);
                    return loaderContext.fs.readFileSync(filePath, 'utf8');
                  }
                );
                return result;
              }
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name][ext]'
        }
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: "src/assets", 
          to: "assets" 
        }
      ],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      filename: "index.html",
      chunks: ["index"],
      inject: true
    }),
    // Add the new Geeks Club pages
    new HtmlWebpackPlugin({
      template: "./src/pages/geeks-club-week1.html",
      inject: true,
      chunks: ["index"],
      filename: "geeks-club-week1.html",
      publicPath: './',
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/geeks-club-week2.html",
      inject: true,
      chunks: ["index"],
      filename: "geeks-club-week2.html",
      publicPath: './',
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/2024/46/breakpointGroups.html",
      inject: true,
      chunks: ["index"],
      filename: "breakpointGroups.html",
      publicPath: './',
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/2024/46/rider-free.html",
      filename: "rider-free.html",
      chunks: ["index"],
      publicPath: './',
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/2024/46/cursor-review.html",
      filename: "cursor-review.html",
      chunks: ["index"],
      publicPath: './',
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/2024/46/vscode-ai.html",
      filename: "vscode-ai.html",
      chunks: ["index"],
      publicPath: './',
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/2024/46/package-management.html",
      filename: "package-management.html",
      chunks: ["index"],
      publicPath: './',
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/2024/46/nuget-why.html",
      filename: "nuget-why.html",
      chunks: ["index"],
      publicPath: './',
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/2024/46/debugger-return.html",
      filename: "debugger-return.html",
      chunks: ["index"],
      publicPath: './',
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/2024/46/vs-shortcuts.html",
      filename: "vs-shortcuts.html",
      chunks: ["index"],
      publicPath: './',
    })
  ],
};
