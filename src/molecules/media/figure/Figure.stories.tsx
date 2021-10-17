import React from 'react';
import {Meta, Story} from "@storybook/react";

import data from "./Figure.stories.json";
import {Figure, FigureProps} from "./Figure";

export default {
    title: "molecules/media/Figure",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: Figure,
    argTypes: {
        caption: {
            defaultValue: data.caption,
            control: {type: "text"}
        },
        image: {
            defaultValue: data.image,
            control: {type: "object"}
        },
        size: {
            defaultValue: "large",
            control: {type: "select"}
        },
        align: {
            defaultValue: "left",
            control: {type: "select"}
        },
    }
} as Meta;

const Template: Story<FigureProps> = (args) => <Figure {...args} />

export const Basic = Template.bind({});

export const with_video = Template.bind({});
with_video.args = {
    videoSrc: data.videoSrc,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    image: {}
}
