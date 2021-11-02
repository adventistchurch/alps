import React from "react";
import {Meta, Story} from "@storybook/react";

import data from "./SearchResults.stories.json";
import {SearchResults, SearchResultsProps} from "./SearchResults";

export default {
    title: "organisms/content/Search Results",
    component: SearchResults,
    argTypes: {
        results: {
            defaultValue: data.results,
            control: {type: "object"}
        }
    }
} as Meta;

const Template: Story<SearchResultsProps> = (args) =>
    <SearchResults {...args}/>;
export const Basic = Template.bind({});
