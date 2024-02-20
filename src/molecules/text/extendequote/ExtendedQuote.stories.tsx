import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import {ExtendedQuote} from "./ExtendedQuote";
import data from "./ExtendesQuote.stories.json";

const meta = {
    title: "molecules/text/ExtendedQuote",
    component: ExtendedQuote,
    argTypes: {}
} satisfies Meta<typeof ExtendedQuote>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        title: data.title,
        quote: data.quote,
        author: data.author,
        minutes: data.minutes,
    }
};

