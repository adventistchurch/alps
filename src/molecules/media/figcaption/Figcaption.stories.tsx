import React from 'react';
import {Meta, StoryObj} from "@storybook/react";

import data from "./Figcaption.stories.json";
import {Figcaption} from "./Figcaption";

const meta = {
    title: "molecules/media/Figcaption",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: Figcaption,
    argTypes: {}
} satisfies Meta<typeof Figcaption>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        caption: data.caption
    }
};