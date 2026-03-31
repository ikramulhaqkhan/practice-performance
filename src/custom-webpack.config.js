const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  plugins: [
    // new webpack.ProvidePlugin({
    //   'window.raf': 'raf'
    // }),
    new CompressionPlugin({
      algorithm: "gzip",
    }),
    new BrotliPlugin(),
  ],
  // externals: {
  //   "canvg": "commonjs canvg",
  //   'file-saver': 'file-saver',
  //   'jspdf-autotable': 'jspdf-autotable'
  // }
};
