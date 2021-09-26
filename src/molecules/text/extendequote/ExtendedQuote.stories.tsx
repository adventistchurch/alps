import React from "react";
import {Meta, Story} from "@storybook/react";
import {ExtendedQuote, ExtendedQuoteProps} from "./ExtendedQuote";
import data from "./ExtendesQuote.stories.json";

export default {
    title:"molecules/text/ExtendedQuote",
    component: ExtendedQuote,
    argTypes: {
        title: {
            defaultValue: data.title,
            control: {type: "text"}
        },
        quote: {
            defaultValue: data.quote,
            control: {type: "text"}
        },
        author: {
            defaultValue: data.author,
            control: {type: "text"}
        },
        minutes: {
            defaultValue: data.minutes,
            control: {type: "number"}
        }
    }
} as Meta;

const Template: Story<ExtendedQuoteProps> = (args) =>
    <ExtendedQuote {...args}/>;
export const Basic = Template.bind({});

