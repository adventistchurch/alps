import React from 'react';
import {Meta, StoryObj} from "@storybook/react";

import data from "./Figure.stories.json";
import {Figure} from "./Figure";

const meta = {
    title: "molecules/media/Figure",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: Figure,
    argTypes: {},
    tags: ['autodocs'],
} satisfies Meta<typeof Figure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        caption: data.caption,
        image: data.image,
        size: "large",
        align: "left"
    }
};

export const with_video: Story = {
    args: {
        caption: data.caption,
        videoSrc: data.videoSrc,
        // @ts-ignore
        image: {},
        size: "large",
        align: "left"
    }
};

