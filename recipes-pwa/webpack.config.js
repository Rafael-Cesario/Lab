const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.tsx",
    serviceWorker: "./src/serviceWorker.ts"
  },

  devServer: {
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
  },
};
