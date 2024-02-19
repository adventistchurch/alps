import React from 'react';
import data from "./BreakoutBlock.stories.json";
import {Meta, StoryObj} from "@storybook/react";
import {BreakoutBlock} from "./BreakoutBlock";

const meta = {
    title: "molecules/blocks/Breakout Block",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: BreakoutBlock,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof BreakoutBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        title: data.title,
        description: data.description,
        cta: data.cta,
        url: data.url,
    }
};