const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const outputPath = path.resolve(__dirname, "dist");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: outputPath,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     // "style-loader",
      //     "css-loader",
      //   ], // 後ろから順に読み込む（css-loaderはcssをJSに変換する。style-loaderはstyleタグに変換して適用する）
      // },
      {
        test: /\.(sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 2048,
              name: "./images/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  devServer: {
    contentBase: outputPath,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    }),
  ],
};
