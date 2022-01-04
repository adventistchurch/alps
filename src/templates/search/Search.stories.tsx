import React from "react";

import data from "./Search.stories.json";
import dataHeaderPrimary from "../../molecules/navigation/primaryNavigation/PrimaryNavigation.stories.json";
import dataHeaderSecondary from "../../molecules/navigation/secondaryNavigation/SecondaryNavigation.stories.json";
import dataFooterPrimary from "../../molecules/navigation/footerPrimaryNavigation/FooterPrimaryNavigation.stories.json";
import dataFooterSecondary
    from "../../molecules/navigation/footerSecondaryNavigation/FooterSecondaryNavigation.stories.json";
import {Meta, Story} from "@storybook/react";
import {Search, SearchProps} from "./Search";

export default {
    title: "templates/Search",
    component: Search,
    argTypes: {
        blankTemplate: {
            defaultValue: {
                templateProps: {
                    header: {
                        primaryNav: dataHeaderPrimary,
                        secondaryNav: dataHeaderSecondary,
                        logoElement: "SDA"
                    },
                    footer: {
                        primaryNav: dataFooterPrimary,
                        secondaryNav: dataFooterSecondary
                    }
                },
                control: {type: "object"}
            }
        },
        results: {
            defaultValue: data.results,
            control: {type: "object"}
        }
    }
} as Meta;

const Template: Story<SearchProps> = (args) =>
    <Search {...args}/>;

export const Basic = Template.bind({});

export const with_suggestions = Template.bind({});
with_suggestions.args = {
    suggestions: data.suggestions
}