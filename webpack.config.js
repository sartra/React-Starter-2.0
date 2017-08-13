const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  module: {
    loaders: [
       {
         test: /\.js?$/,
         loader: 'babel-loader',
         exclude: /node_modules/
       },
       {
        test: /\.scss$/,
        loaders: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          require.resolve('sass-loader')
        ]
      }
     ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
   extensions: ['.js', '.scss']
 },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
