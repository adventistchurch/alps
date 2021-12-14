import React from 'react';
import {Meta, Story} from "@storybook/react";
import {Image, ImageProps} from "./Image";

const defaultImages = {
    Landscape: '//picsum.photos/800/600',
    Portrait: '//picsum.photos/600/800',
    Square: '//picsum.photos/500/500',
}

export default {
    title: "atoms/images/Image",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: Image,
    argTypes: {
        src: {
            defaultValue: defaultImages.Landscape,
            control: {type: "object"}
        },
        alt: {
            defaultValue: "Just a placeholder image",
            control: {type: "text"}
        },
        lazy: {
            defaultValue: false,
            control: {type: "boolean"}
        },
        className: {
            defaultValue: "story-block__image",
            control: {type: "text"}
        },
        mode: {
            name: "Mode",
            defaultValue: "Landscape " + defaultImages.Landscape,
            control: {type: "text"}
        }
    },
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Landscape = Template.bind({});

export const Portrait = Template.bind({});
Portrait.args = {
    src: defaultImages.Portrait,
    mode: "Portrait " + defaultImages.Portrait
}

export const Square = Template.bind({});
Square.args = {
    src: defaultImages.Square,
    mode: "Square " + defaultImages.Square
}
