import React from 'react';
import data from "./BreakoutBlock.stories.json";
import {Meta, Story} from "@storybook/react";
import {BreakoutBlock, BreakoutBlockProps} from "./BreakoutBlock";

export default {
    title: "molecules/blocks/Breakout Block",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: BreakoutBlock,
    argTypes: {
        title: {
            defaultValue: data.title,
            control: {type: "text"}
        },
        description: {
            defaultValue: data.description,
            control: {type: "text"}
        },
        cta: {
            defaultValue: data.cta,
            control: {type: "text"}
        },
        url: {
            defaultValue: data.url,
            control: {type: "text"}
        }
    },
} as Meta;

const Template: Story<BreakoutBlockProps> = (args) => <BreakoutBlock {...args} />

export const Basic = Template.bind({});