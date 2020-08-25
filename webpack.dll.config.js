const path = require('path')
const webpack = require('webpack')
const TersetJSPlugin = require('terser-webpack-plugin');
const OptimizeWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  entry: {
    modules: [
      'react',
      'react-dom',
      'react-router-dom',
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    library: '[name]',
  },
  optimization: {
    minimizer: [
      new TersetJSPlugin(),
      new OptimizeWebpackPlugin()
    ]
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json')
    })
  ],
}