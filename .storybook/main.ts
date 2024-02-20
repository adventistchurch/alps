import type { StorybookConfig } from "@storybook/react-webpack5";
const path = require('path');

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: true,
        backgrounds: false,
        controls: true,
        docs: true,
        viewport: true,
        toolbars: false,
        canvas: true
      }
    },
    // "@storybook/preset-create-react-app",
    '@whitespace/storybook-addon-html',
    'storybook-addon-themes',
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: true,
  },
  staticDirs: ["../public"],
  webpackFinal: async (config, { configType }) => {
    // @ts-ignore
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });
    return config;
  },
};
export default config;
