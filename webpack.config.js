const path = require('path');
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// This will be globally accessible in your app and will change easily across environments
const API_URL = {
    production: JSON.stringify('https://regain.brainpower-api.com/api'),
    development: JSON.stringify('https://regain-dev.brainpower-api.com/api')
}

const environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const VENDOR_LIBS = [
  'axios', 'prop-types', 'react', 'react-dom', 'react-redux', 'react-router-dom',
  'redux', 'redux-thunk', 'redux-logger'
]

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  module: {
    rules: [
      /* JS */
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      /* SCSS */
      {
        test: /\.scss?$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                    path: './config/postcss.config.js'
                }
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      }
    ]
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
   extensions: ['.js']
 },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin({
      'API_URL': API_URL[environment]
    })
    //new BundleAnalyzerPlugin() Uncomment if youd like to visually inspect the size of your bundles
  ]
}
