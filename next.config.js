const path = require('path');
const withCss = require('@zeit/next-css');
const withCustomBabelConfigFile = require('next-plugin-custom-babel-config');
const withPlugins = require('next-compose-plugins');
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

module.exports = withPlugins([withCss, withCustomBabelConfigFile], {
    babelConfigFile: path.resolve('./babel.config.js'),
    webpack: config => {
        config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

        return config;
    },
});
