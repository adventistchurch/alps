import {primaryColorsThemes} from "../src/global/colors";
import "./storybook.scss";
import {ArgsTable, Description, Primary, PRIMARY_STORY, Stories, Subtitle, Title} from "@storybook/addon-docs";
import React from "react";

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
  options: {
    storySort: {
      order: [
        'Introduction',
        [
          'Installation',
          'Using the library',
          "What's new",
          'Support and Feedback'
        ],
        'Documentation',
        'Components',
      ],
    },
  },
  docs: {
    // eslint-disable-next-line react/display-name
    page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
    ),
  }
}