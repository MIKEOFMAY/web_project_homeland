const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  devtool: "inline-source-map",
  entry: {
    main: "./src/index.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  target: ["web", "es5"],
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "./public"),
    compress: true,
    port: 8080,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
     
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      },
    ]
  }, 
  stats: {
    errorDetails: true, // Add this line to show error details
  },
};
         