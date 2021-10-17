import React from 'react';
import {Meta, Story} from "@storybook/react";

import data from "./BreakoutImage.stories.json";
import {BreakoutImage, BreakoutImageProps} from "./BreakoutImage";

export default {
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
} as Meta;

const Template: Story<BreakoutImageProps> = (args) => <BreakoutImage {...args} />

export const Basic = Template.bind({});

export const with_parallax = Template.bind({});
with_parallax.args = {
    parallax: true
}