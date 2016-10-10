"use strict";

module.exports = {
  entry: './src/main.tsx',
  output: {
    filename: 'main.js'
  },
  resolve: {
    root: __dirname + 'src/js'
  },
  module: {
    loaders: [{
      test:     /\.tsx?$/,
      exclude:  /node_modules/,
      loader:  'ts-loader'
    }]
  }
};