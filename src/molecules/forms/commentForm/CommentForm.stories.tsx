import React from "react";
import {Meta, StoryObj} from '@storybook/react'
import data from "./CommentForm.stories.json";
import {CommentForm} from "./CommentForm";

const meta = {
    title: "molecules/forms/Comment Form",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: CommentForm,
    argTypes: {}
} satisfies Meta<typeof CommentForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        rows: data.numberOfRows,
        submitLabel: data.submitLabel,
        title: data.title
    }
};
