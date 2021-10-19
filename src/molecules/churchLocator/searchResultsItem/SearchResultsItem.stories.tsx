import React from "react";
import {Meta, Story} from "@storybook/react";
import data from "./SearchResultsItem.stories.json";
import {SearchResultsItem, SearchResultsItemProps} from "./SearchResultsItem";

export default {
    title: "molecules/Church Locator/Search Results Item",
    component: SearchResultsItem,
    argTypes: {
        title: {
            defaultValue: data.title,
            control: {type: "text"}
        },
        address: {
            defaultValue: data.address,
            control: {type: "text"}
        },
        site: {
            defaultValue: data.site,
            control: {type: "text"}
        },
        siteLabel: {
            defaultValue: data.siteLabel,
            control: {type: "text"}
        }
    }
} as Meta;

const Template: Story<SearchResultsItemProps> = (args) =>
    <SearchResultsItem {...args}/>;
export const Basic = Template.bind({});

