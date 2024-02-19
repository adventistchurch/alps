import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import {Pullquote} from "./Pullquote";
import data from "./Pullquote.stories.json";

const meta = {
    title: "molecules/text/Pullquote",
    component: Pullquote,
    argTypes: {}
} satisfies Meta<typeof Pullquote>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        quote: data.quote,
        author: data.author
    }
};