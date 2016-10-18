"use strict";

module.exports = {
  entry: './src/main.tsx',
  output: {
    filename: 'www/js/main.js'
  },
  resolve: {
    root: __dirname + 'src/',
    extensions: ["",".ts",".tsx",".js"]
  },
  module: {
    loaders: [
      {
        test:     /\.tsx?$/,
        exclude:  /node_modules/,
        loader:  'ts-loader'
      },
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          'css-loader'
        ]
      },
      { 
        test: /\.json$/, 
        loader: 'json' 
      }
    ]
  }
};