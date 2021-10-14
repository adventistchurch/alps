import React from "react";
import {Meta, Story} from '@storybook/react'
import {Search, SearchProps} from "./Search";
import data from "./Search.stories.json";

export default {
    title: "molecules/froms/Search",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: Search,
    argTypes: {
        placeholder: {
            defaultValue: data.placeholder,
            control: {type: "text"}
        },
        submitLabel: {
            defaultValue: data.submitLabel,
            control: {type: "text"}
        },
        title: {
            defaultValue: data.title,
            control: {type: "text"}
        }
    }
} as Meta;

const Template: Story<SearchProps> = (args) => <Search {...args}/>;

export const Basic = Template.bind({});

export const with_suggestions = Template.bind({});
with_suggestions.args = {
    suggestions: data.suggestions
}
