import React from 'react';
import {Meta, StoryObj} from "@storybook/react";

import data from "./BreakoutImage.stories.json";
import {BreakoutImage} from "./BreakoutImage";

const meta = {
    title: "molecules/media/Breakout Image",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: BreakoutImage,
    argTypes: {
        caption: {
            defaultValue: data.caption,
            control: {type: "text"}
        },
        srcSet: {
            defaultValue: data.srcSet,
            control: {type: "object"}
        }
    }
} satisfies Meta<typeof BreakoutImage>;

export default meta;

type Story = StoryObj<typeof meta>;

// @ts-ignore
export const Basic: Story = {
    args: {
        caption: data.caption,
        srcSet: data.srcSet
    }
};

export const with_parallax: Story = {
    args: {
        ...Basic.args,
        parallax: true
    }
};
