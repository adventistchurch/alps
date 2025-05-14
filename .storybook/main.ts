import type { StorybookConfig } from '@storybook/react-webpack5';

const path = require('path');

const config: StorybookConfig = {
  // Paths to stories files
  stories: [ "../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)" ],

  // Addons configuration
  addons: [
    "@storybook/addon-webpack5-compiler-swc", // SWC compiler for faster builds
    "@storybook/addon-essentials", // Essential Storybook addons
    "@storybook/addon-onboarding", // Onboarding guide
    "@chromatic-com/storybook", // Chromatic integration
    "@storybook/addon-interactions", // Interaction testing
    "@storybook/addon-themes",
    "@storybook/addon-docs"
  ],

  // Framework configuration
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  staticDirs: [
    '../.storybook/public',
  ],

  webpackFinal: async (config, { configType }) => {
    // @ts-ignore
    config.module.rules.push({
      test: /\.scss$/,
      use: [ 'style-loader', 'css-loader', 'sass-loader' ],
      include: path.resolve(__dirname, '../'),
    });
    return config;
  },

  // TypeScript configuration
  typescript: {
    check: true, // Enable type checking during build
    reactDocgen: 'react-docgen-typescript', // Use react-docgen-typescript for prop docs
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true, // Extract enum values
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true), // Filter out props from node_modules
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      }
    }
  }
};

export default config;
