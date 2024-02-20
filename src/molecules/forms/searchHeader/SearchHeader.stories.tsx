import React from "react";
import {Meta, StoryObj} from '@storybook/react';
import data from "./SearchHeader.stories.json";
import {SearchHeader} from "./SearchHeader";

const meta = {
    title: "molecules/forms/Search Header",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: SearchHeader,
    argTypes: {}
} satisfies Meta<typeof SearchHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        // @ts-ignore
        filters: data.filters,
        placeholder: data.placeholder,
        searchAgainLabel: data.searchAgainLabel,
        searchLabel: data.searchLabel,
    }
};

export const with_filters: Story = {
    args: {
        ...Basic.args,
        showFilters: true
    }
}

export const with_suggestions: Story = {
    args: {
        ...Basic.args,
        suggestions: data.suggestions,
        term: "Hi"
    }
}

