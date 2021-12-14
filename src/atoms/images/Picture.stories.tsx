import React from 'react';
import {Meta, Story} from "@storybook/react";
import {Picture, PictureProps} from "./Picture";
import data from './Picture.stories.json';

export default {
    title: "atoms/images/Picture",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: Picture,
    argTypes: {
        image: {
            defaultValue: {
                srcSet: data.Landscape,
                alt: data.alt
            },
            control: {type: "object"}
        },
        lazy: {
            defaultValue: false,
            control: {type: "boolean"}
        }
    },
} as Meta;

const Template: Story<PictureProps> = (args) => <Picture {...args} />;

export const Landscape = Template.bind({});

export const Portrait = Template.bind({});
Portrait.args = {
    image: {
        srcSet: data.Portrait,
        alt: data.alt
    }
}

export const Square = Template.bind({});
Square.args = {
    image: {
        srcSet: data.Square,
        alt: data.alt
    }
}
