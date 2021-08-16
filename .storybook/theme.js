import { create } from '@storybook/theming';

export default create({
    base: 'light', // Is this a 'light' or 'dark' theme?

    brandTitle: 'ALPS-Storybook',
    brandUrl: 'https://github.com/adventistchurch/alps/tree/storybook',
    brandImage: 'alps-storybook-logo.svg',

    // Simulates ALPS radius-less styles.
    appBorderRadius: 0,
    inputBorderRadius: 0,
})