import React from 'react';
import data from "./HeadingBlock.stories.json";
import {Meta, Story} from "@storybook/react";
import {HeadingBlock, HeadingBlockProps} from "./HeadingBlock";

export default {
    title: "molecules/Heading Block",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: HeadingBlock,
    argTypes: {
        title: {
            defaultValue: data.title,
            control: {type: "text"}
        },
        linkText: {
            name: "Link Text",
            defaultValue: data.linkText,
            control: {type: "text"}
        },
        url: {
            defaultValue: data.url,
            control: {type: "text"}
        },
    },
} as Meta;

const Template: Story<HeadingBlockProps> = (args) => <HeadingBlock {...args} />

export const Basic = Template.bind({});