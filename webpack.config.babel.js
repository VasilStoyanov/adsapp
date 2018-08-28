// Vasil Stoyanov:
// I copied this from: https://medium.com/oredi/webpack-with-babel-7-b61f7caa9565

// This file is required in order for webpack to work with Babel Next

/*
 * (!) Remove this file, once Babel is v7 or higher. (!)
 */
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';

export default {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [{
      test: /\.js/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'babel-loader',
      }],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: path.join(__dirname, 'src/index.template.html'),
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer',
    }),
  ],
  stats: {
    colors: true,
  },
  devtool: 'source-map',
};
