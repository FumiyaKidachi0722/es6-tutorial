const path = require("path");

module.exports = {
  mode: "development", // ここを追加。開発用なら "development"、本番用なら "production"
  entry: {
    app: "./js/main.js",
    ratefinder: "./js/ratefinder.js",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  stats: {
    colors: true,
  },
  devtool: "source-map", // ソースマップを有効にする
};
