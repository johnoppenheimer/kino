const path = require('path');
const withSass = require('@zeit/next-sass');
const withCustomBabelConfigFile = require('next-plugin-custom-babel-config');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withCustomBabelConfigFile, withSass], {
    babelConfigFile: path.resolve('./babel.config.js'),
});
