const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './client/src/index.jsx',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { 
          presets: ['@babel/preset-env', '@babel/preset-react'] 
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', ',jsx'] },
  output: {
    path: path.resolve(__dirname, 'client/dist/'),
    publicPath: '/client/dist/',
    filename: 'bundle.js',
  },
};
