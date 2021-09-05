import {primaryColorsThemes} from "../src/global/colors";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    // matchers: {
    //   color: /(background|color)$/i,
    //   date: /Date$/,
    // },
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
  themes: {
    default: 'Ming',
    list: primaryColorsThemes,
  },
}