import React from 'react';
import data from "./GalleryBlock.stories.json";
import {Meta, StoryObj} from "@storybook/react";
import {GalleryBlock} from "./GalleryBlock";

const meta = {
    title: "molecules/blocks/Gallery Block",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: GalleryBlock,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof GalleryBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        title: data.title,
        kicker: data.kicker,
        description: data.description,
        images: data.images
    }
};