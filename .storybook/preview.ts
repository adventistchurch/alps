import type { Preview } from "@storybook/react";
import {primaryColorsThemes} from "../src/global/colors";
import "./storybook.scss";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            // matchers: {
            //   color: /(background|color)$/i,
            //   date: /Date$/i,
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
};

export default preview;
