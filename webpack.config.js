const {
  entry,
  buildDirectory,
  rules,
  plugins,
} = require('./build-config/build.config');

const webpackConfig = {
  entry,
  output: {
    publicPath: '/',
    path: buildDirectory,
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  devServer: {
    contentBase: './dist/',
  },
  module: {
    rules,
  },
  plugins,
};

module.exports = webpackConfig;
