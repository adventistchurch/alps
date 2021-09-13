import {Meta, Story} from "@storybook/react";
import data from './Inline.stories.json'
import React from "react";
import {Inline, InlineProps} from "./Inline";

export default {
    title: "components/Lists/Inline",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: Inline,
    argTypes: {
        items: {
            name: "items",
            defaultValue: data.items,
            control: {type: "object"}
        }
    },
} as Meta;

const Template: Story<InlineProps> = (args) =>
    <Inline {...args} />

export const Basic = Template.bind({});
