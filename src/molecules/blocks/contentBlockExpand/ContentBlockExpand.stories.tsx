import React from 'react';
import data from "./ContentBlockExpand.stories.json";
import {Meta, StoryObj} from "@storybook/react";
import {ContentBlockExpand} from "./ContentBlockExpand";

const meta = {
    title: "molecules/blocks/Content Block Expand",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: ContentBlockExpand,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof ContentBlockExpand>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        title: data.title,
        description: data.description,
        kicker: data.kicker,
    }
};