// const path = require("path");
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
export default {
  entry: path.resolve("./src/app.js"),
  output: {
    path: path.resolve( "dist"),
    filename: "index.bundle.js",
    clean: true,
  },
  /* đoạn code sau sẽ load các gói babel vào webpack */
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env",  "@babel/preset-react",],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join( "./public", "index.html"),
    }),
  ],
};