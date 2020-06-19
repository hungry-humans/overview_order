var path = require('path');

module.exports = {
  entry: './client/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module : {
    loaders: [
      {
        test: /\.m?js$/,
      // exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  watchOptions:{
    poll:true
  }
};