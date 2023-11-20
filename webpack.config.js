/*const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filena              : 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};*/

const HtmlWebpackPlugin = require("html-webpack-plugin"); // hubungkan plugin
const path = require("path");

module.exports = {
  devtool: "inline-source-map",
  entry: {
    main: "./src/index.js"
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html" // jalur file ke index
    })
  ],

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: ""
  },
  target: ["web", "es5"], // memastikan bahwa kode lengket Webpack juga kompatibel dengan ES5
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    compress: true,
    port: 8080,
    open: true
  },
  module: {
    rules: [
      // ini adalah array berisi kaidah
      // tambahkan objek berisi kaidah untuk Babel ke dalamnya
      {
        // ekspresi regular yang mencari semua file js
        test: /\.js$/,
        // semua file harus diproses oleh babel-loader
        loader: "babel-loader",
        // kecualikan folder node_modules, kita tidak perlu memproses file di dalamnya
        exclude: "/node_modules/"
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)/i,
        type: "asset/resource"
      },
      {
        test: /\.css$/i,
        use: [
            'style-loader',
            // ini jalan terlebih dahulu
            'css-loader'
        ]
    },
    {
        test: /\.html$/i,
        use: 'html-loader'
    },
    ]
  }
};
