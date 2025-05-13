import { addons } from '@storybook/manager-api';
import { createTheme } from './theme';

// 1. Create the default theme for the UI (not to be confused with component themes)
const defaultTheme = createTheme('Ming'); // Use the function from theme.ts

addons.setConfig({
  theme: defaultTheme,

  // 2. Additional UI settings (optional)
  sidebar: {
    showRoots: true, // Show root elements
    collapsedRoots: [ 'other' ], // Collapse specific sections
  },

  // 3. Toolbar settings
  toolbar: {
    title: { hidden: false }, // Show title
    zoom: { hidden: false }, // Show zoom button
    eject: { hidden: false }, // Show eject button
    copy: { hidden: false }, // Show copy button
    fullscreen: { hidden: false }, // Show fullscreen button
  },
});
