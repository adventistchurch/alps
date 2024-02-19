import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import data from "./SearchResultsItem.stories.json";
import {SearchResultsItem} from "./SearchResultsItem";

const meta = {
    title: "molecules/Church Locator/Search Results Item",
    component: SearchResultsItem,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof SearchResultsItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        title: data.title,
        address: data.address,
        site: data.site,
        siteLabel: data.siteLabel
    }
};

