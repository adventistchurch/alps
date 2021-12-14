import {Meta, Story} from "@storybook/react";
import data from './Ordered.stories.json'
import React from "react";
import {Ordered, OrderedProps} from "./Ordered";

export default {
    title: "atoms/Lists/Ordered",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: Ordered,
    argTypes: {
        items: {
            name: "items",
            defaultValue: data.items,
            control: {type: "object"}
        }
    },
} as Meta;

const Template: Story<OrderedProps> = (args) =>
    <Ordered {...args} />

export const Basic = Template.bind({});
