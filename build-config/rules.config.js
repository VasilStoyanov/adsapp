const commonExclude = { exclude: /node_modules/ };

const esLintRule = {
  ...commonExclude,
  enforce: 'pre',
  test: /\.js$/,
  use: {
    loader: 'eslint-loader',
  },
};

const babelRule = {
  ...commonExclude,
  test: /\.(js|jsx)$/,
  use: {
    loader: 'babel-loader',
  },
};

const styleRule = {
  ...commonExclude,
  test: /\.s?css/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader',
  ],
};

const rules = [
  esLintRule,
  babelRule,
  styleRule,
];

module.exports = rules;
