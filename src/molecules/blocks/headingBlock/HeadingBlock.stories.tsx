import React from 'react';
import data from "./HeadingBlock.stories.json";
import {Meta, StoryObj} from "@storybook/react";
import {HeadingBlock} from "./HeadingBlock";

const meta = {
    title: "molecules/blocks/Heading Block",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: HeadingBlock,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof HeadingBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        title: data.title,
        linkText: data.linkText,
        url: data.url,
    }
};