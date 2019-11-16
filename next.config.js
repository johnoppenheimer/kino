const path = require('path');
const withCss = require('@zeit/next-css');
const withCustomBabelConfigFile = require('next-plugin-custom-babel-config');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withCss, withCustomBabelConfigFile], {
    babelConfigFile: path.resolve('./babel.config.js'),
    env: {
        CLIENT_IDENTIFIER: process.env.CLIENT_IDENTIFIER,
        PROJECT_NAME: process.env.PROJECT_NAME,
    },
});
