export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  html: {
    prettier: {
      tabWidth: 2,
      useTabs: false,
      jsxBracketSameLine: false,
      htmlWhitespaceSensitivity: 'ignore',
    },
  },
  themes: {
    default: 'Ming',
    list: [
      { name: 'Ming', class: 'u-theme--ming', color: '#007f98' },
      { name: 'facebook', class: 'theme-fb', color: '#' }
    ],
  },
}