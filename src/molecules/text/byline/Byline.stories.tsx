import React from "react";
import {Meta, Story} from "@storybook/react";
import {Byline, BylineProps} from "./Byline";
import data from "./Byline.stories.json";

export default {
    title: "molecules/text/Byline",
    component: Byline,
    argTypes: {
        value: {
            defaultValue: data.textValue,
            control: {type: "text"}
        }
    }
} as Meta;

const Template: Story<BylineProps> = (args) =>
    <Byline {...args}/>;
export const Basic = Template.bind({});