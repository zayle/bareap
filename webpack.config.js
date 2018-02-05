const path = require('path');

var devPath = path.join(__dirname, 'development');
module.exports = {
  entry: path.join(devPath, 'react/app.jsx'),
  output: {
    path: path.join(__dirname, 'production'),
    filename: 'app.js'
  },
  module: {
    rules: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};
