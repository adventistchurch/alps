import React from "react";
import {Meta, Story} from '@storybook/react'
import data from "./SearchFilter.stories.json";
import {SearchFilter, SearchFilterProps} from "./SearchFilter";

export default {
    title: "molecules/forms/Search Filter",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: SearchFilter,
    argTypes: {
        filters: {
            defaultValue: data.filters,
            control: {type: "object"}
        },
        sorting: {
            defaultValue: data.sorting,
            control: {type: "object"}
        },
        placeholder: {
            defaultValue: data.placeholder,
            control: {type: "text"}
        },
        searchAgainLabel: {
            defaultValue: data.searchAgainLabel,
            control: {type: "text"}
        },
        searchLabel: {
            defaultValue: data.searchLabel,
            control: {type: "text"}
        }
    }
} as Meta;

const Template: Story<SearchFilterProps> = (args) => <SearchFilter {...args}/>;

export const Basic = Template.bind({});
