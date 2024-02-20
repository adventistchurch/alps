import React from "react";
import {Meta, StoryObj} from "@storybook/react";

import data from "./SearchResults.stories.json";
import {SearchResults} from "./SearchResults";

const meta = {
    title: "organisms/content/Search Results",
    component: SearchResults,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof SearchResults>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        // @ts-ignore
        results: data.results
    }
};
