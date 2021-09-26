import React from "react";
import {Meta, Story} from "@storybook/react";
import {Highlight, HighlightProps} from "./Highligh";
import data from "./Highlight.stories.json";


export default {
    title: "molecules/text/Highlight",
    component: Highlight,
    argTypes: {
        value: {
            defaultValue: data.text,
            control: {type: "text"}
        }
    }
} as Meta;

const Template: Story<HighlightProps> = (args) =>
    <Highlight {...args}/>;
export const Basic = Template.bind({});