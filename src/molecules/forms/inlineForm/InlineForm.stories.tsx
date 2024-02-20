import React from "react";
import {Meta, StoryObj} from '@storybook/react'
import data from "./InlineForm.stories.json";
import {InlineForm} from "./InlineForm";

const meta = {
    title: "molecules/forms/Inline Form",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: InlineForm,
    argTypes: {}
} satisfies Meta<typeof InlineForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        submitLabel: data.submitLabel
    }
};
