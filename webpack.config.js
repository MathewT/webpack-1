const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        // Use babel to transpile and bundle all the JS.
        use: 'babel-loader',
        test: /\.js$/
      },
      {
        // use: ['style-loader', 'css-loader'],
        // Use extract-text-webpack-plugin to bundle all the CSS into style.css
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        }),
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {limit: 40000}
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]

};


module.exports = config;