import React from 'react';
import {Meta, Story} from "@storybook/react";

import data from "./Figcaption.stories.json";
import {Figcaption, FigcaptionProps} from "./Figcaption";

export default {
    title: "molecules/media/Figcaption",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: Figcaption,
    argTypes: {
        caption: {
            defaultValue: data.caption,
            control: {type: "text"}
        }
    }
} as Meta;

const Template: Story<FigcaptionProps> = (args) => <Figcaption {...args} />

export const Basic = Template.bind({});