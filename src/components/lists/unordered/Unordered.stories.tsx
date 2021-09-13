import {Meta, Story} from "@storybook/react";
import data from './Unordered.stories.json'
import React from "react";
import {Unordered, UnorderedProps} from "./Unordered";

export default {
    title: "components/Lists/Unordered",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: Unordered,
    argTypes: {
        items: {
            name: "items",
            defaultValue: data.items,
            control: {type: "object"}
        }
    },
} as Meta;

const Template: Story<UnorderedProps> = (args) =>
    <Unordered {...args} />

export const Basic = Template.bind({});
