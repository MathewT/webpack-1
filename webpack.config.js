const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        // Our first loader/rule module
        use: 'babel-loader',
        test: /\.js$/
      }
    ]
  }

};


module.exports = config;