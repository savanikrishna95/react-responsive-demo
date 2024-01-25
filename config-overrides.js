const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  // Other webpack configuration...
  output: {
    filename: `[name].[contenthash].[timestamp].js`,
    // Other output configuration...
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.timestamp': JSON.stringify(new Date().getTime().toString()),
    }),
    // Other plugins...
  ],
};
