import React from "react";
import {Meta, StoryObj} from '@storybook/react'
import {Search} from "./Search";
import data from "./Search.stories.json";

const meta = {
    title: "molecules/forms/Search",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: Search,
    argTypes: {}
} satisfies Meta<typeof Search>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        placeholder: data.placeholder,
        submitLabel: data.submitLabel,
        title: data.title,
    }
};

export const with_suggestions: Story = {
    args: {
        ...Basic.args,
        suggestions: data.suggestions
    }
};

