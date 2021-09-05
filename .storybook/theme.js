import { create } from '@storybook/theming';

const themeColor = 'light';

export default create({
    base: themeColor, // Is this a 'light' or 'dark' theme?

    brandTitle: 'ALPS Library',
    brandUrl: 'https://github.com/adventistchurch/alps/tree/storybook',
    brandImage: themeColor === 'light' ? 'alps-storybook-logo.svg' : 'alps-storybook-logo-dark.svg',

    // Simulates ALPS radius-less styles.
    appBorderRadius: 0,
    inputBorderRadius: 0,
})