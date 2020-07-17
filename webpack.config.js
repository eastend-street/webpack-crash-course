const path = require("path");

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
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // 後ろから順に読み込む（css-loaderはcssをJSに変換する。style-loaderはstyleタグに変換して適用する）
      },
    ],
  },
  devServer: {
    contentBase: outputPath,
  },
};
