const path = require('path');
const plugins = require('./plugins.config');
const rules = require('./rules.config');

const buildConfig = Object.create(null);

const RELATIVE_PATH_TO_JAVASCRIPT_FILES = './src/';
const RELATIVE_PATH_TO_BUILD_DIRECTORY = '../dist/';
const ENTRY_FILE_NAME = 'application.main.js';

buildConfig.applicationDirectory = path.resolve(__dirname, RELATIVE_PATH_TO_JAVASCRIPT_FILES);
buildConfig.buildDirectory = path.resolve(__dirname, RELATIVE_PATH_TO_BUILD_DIRECTORY);

buildConfig.rules = rules;
buildConfig.plugins = plugins;
buildConfig.entry = `${RELATIVE_PATH_TO_JAVASCRIPT_FILES}/${ENTRY_FILE_NAME}`;

Object.freeze(buildConfig);
module.exports = buildConfig;
