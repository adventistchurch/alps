import React from "react";
import {Meta, Story} from "@storybook/react";
import {PullquoteProps,Pullquote} from "./Pullquote";
import data from "./Pullquote.stories.json";

export default {
    title:"molecules/text/Pullquote",
    component: Pullquote,
    argTypes: {
        quote: {
            defaultValue: data.quote,
            control: {type: "text"}
        },
        author: {
            defaultValue: data.author,
            control: {type: "text"}
        },
    }
} as Meta;

const Template: Story<PullquoteProps> = (args) =>
    <Pullquote {...args}/>;
export const Basic = Template.bind({});