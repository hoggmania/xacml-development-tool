
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
    entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
      loaders: [

          {
              test: /\.css$/,
              loaders: [
                  'style',
                  'css',
                  'postcss'
              ]
          },
          {
              test: /\.js$/,
              exclude: /node_modules/,
              loaders: [
                  'react-hot',
                  'babel'
              ]
          },
          { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
              loader: 'file-loader'
          },
      ]

  },
};
