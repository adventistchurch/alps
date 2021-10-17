import React from 'react';
import data from "./GalleryBlock.stories.json";
import {Meta, Story} from "@storybook/react";
import {GalleryBlock, GalleryBlockProps} from "./GalleryBlock";

export default {
    title: "molecules/blocks/Gallery Block",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: GalleryBlock,
    argTypes: {
        title: {
            defaultValue: data.title,
            control: {type: "text"}
        },
        kicker: {
            defaultValue: data.kicker,
            control: {type: "text"}
        },
        description: {
            defaultValue: data.description,
            control: {type: "text"}
        },
        images: {
            defaultValue: data.images,
            control: {type: "object"}
        }
    },
} as Meta;

const Template: Story<GalleryBlockProps> = (args) => <GalleryBlock {...args} />

export const Basic = Template.bind({});