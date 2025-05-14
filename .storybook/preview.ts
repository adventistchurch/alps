import type { Preview } from "@storybook/react";
import {primaryColorsThemes} from "./public/colors";
import { withThemeByClassName } from '@storybook/addon-themes';

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true
    },
    html: {
      prettier: {
        tabWidth: 2,
        useTabs: false,
        jsxBracketSameLine: false,
        htmlWhitespaceSensitivity: 'ignore',
      },
    },
    backgrounds: {
      default: 'Ming',
      values: primaryColorsThemes,
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          [
            'Getting started',
            'Installation',
            'Using the library',
            "What's new",
            'Support and Feedback'
          ],
          'Documentation',
          'Atoms',
          'Molecules',
          'Organisms',
        ],
      },
    },
    docs: {
      toc: true
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        'Bluejay': 'u-theme--bluejay',
        'Campfire': 'u-theme--campfire',
        'Cave': 'u-theme--cave',
        'Denim': 'u-theme--denim',
        'Earth': 'u-theme--earth',
        'Emperor': 'u-theme--emperor',
        'Forest': 'u-theme--forest',
        'Grapevine': 'u-theme--grapevine',
        'Lily': 'u-theme--lily',
        'Ming': 'u-theme--ming',
        'Night': 'u-theme--night',
        'Scarlett': 'u-theme--scarlett',
        'Treefrog': 'u-theme--treefrog',
        'Velvet': 'u-theme--velvet',
        'Winter': 'u-theme--winter'
      },
      defaultTheme: 'Ming',
    }),
  ],
};

export default preview;
