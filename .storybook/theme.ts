import { create } from '@storybook/theming';

const themeColor = 'light';

export const createTheme = (themeName: string) => {
  return create({
    base: themeName.includes('dark') ? 'dark' : 'light',
    brandTitle: `ALPS Library - ${themeName}`,
    brandUrl: 'https://github.com/adventistchurch/alps',
    brandImage: themeName.includes('dark') ?
      'alps-storybook-logo-dark.svg' :
      'alps-storybook-logo.svg',
    appBorderRadius: 0,
    inputBorderRadius: 0,
  });
};
