import {Meta, Story} from "@storybook/react";
import data from './Definition.stories.json'
import {Definition, DefinitionProps} from "./Definition";
import React from "react";

export default {
    title: "components/Lists/Definition",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: Definition,
    argTypes: {
        items: {
            name: "items",
            defaultValue: data.items,
            control: {type: "object"}
        }
    },
} as Meta;

const Template: Story<DefinitionProps> = (args) =>
    <Definition {...args} />

export const Basic = Template.bind({});
