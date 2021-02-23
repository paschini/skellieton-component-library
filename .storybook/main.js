/** @format */

const Style9Plugin = require('style9/webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(tsx|ts|js|mjs|jsx)$/,
      use: [
        {
          loader: Style9Plugin.loader
        },
        {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
              '@babel/preset-react'
            ]
          }
        }
      ]
    });

    config.plugins.push(new Style9Plugin());

    // Return the altered config
    return config;
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@react-theming/storybook-addon'
  ]
};
