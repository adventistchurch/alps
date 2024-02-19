import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import {Highlight} from "./Highligh";
import data from "./Highlight.stories.json";


const meta = {
    title: "molecules/text/Highlight",
    component: Highlight,
    argTypes: {}
} satisfies Meta<typeof Highlight>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        value: data.text
    }
};