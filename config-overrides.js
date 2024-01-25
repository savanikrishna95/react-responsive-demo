const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  // Other webpack configuration...
  output: {
    filename: `[name].[contenthash].[VITE_TIMESTAMP].js`,
    // Other output configuration...
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.VITE_TIMESTAMP': JSON.stringify(new Date().getTime().toString()),
    }),
    // Other plugins...
  ],
};
