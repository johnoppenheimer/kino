const path = require('path');
const withCustomBabelConfigFile = require('next-plugin-custom-babel-config');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withCustomBabelConfigFile], {
    babelConfigFile: path.resolve('./babel.config.js'),
    env: {
        CLIENT_IDENTIFIER: process.env.CLIENT_IDENTIFIER,
        PROJECT_NAME: process.env.PROJECT_NAME,
    },
});
