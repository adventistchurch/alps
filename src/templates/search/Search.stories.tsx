import React from "react";

import data from "./Search.stories.json";
import dataHeaderPrimary from "../../molecules/navigation/primaryNavigation/PrimaryNavigation.stories.json";
import dataHeaderSecondary from "../../molecules/navigation/secondaryNavigation/SecondaryNavigation.stories.json";
import dataFooterPrimary from "../../molecules/navigation/footerPrimaryNavigation/FooterPrimaryNavigation.stories.json";
import dataFooterSecondary
    from "../../molecules/navigation/footerSecondaryNavigation/FooterSecondaryNavigation.stories.json";
import {Meta, StoryObj} from "@storybook/react";
import {Search} from "./Search";

const meta = {
    title: "templates/Search",
    component: Search,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof Search>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        blankTemplate: {
            templateProps: {
                header: {
                    // @ts-ignore
                    primaryNav: dataHeaderPrimary,
                    // @ts-ignore
                    secondaryNav: dataHeaderSecondary,
                    logoElement: "SDA"
                },
                footer: {
                    // @ts-ignore
                    primaryNav: dataFooterPrimary,
                    secondaryNav: dataFooterSecondary
                }
            },
        },
        // @ts-ignore
        results: data.results
    }
};

export const with_suggestions: Story = {
    args: {
        ...Basic.args,
        suggestions: data.suggestions
    }
};
