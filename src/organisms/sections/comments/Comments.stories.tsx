import React from "react";
import {Meta, StoryObj} from "@storybook/react";

import data from "./Comments.stories.json";
import {Comments} from "./Comments";

const meta = {
    title: "organisms/sections/Comments",
    component: Comments,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof Comments>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        // @ts-ignore
        items: data.items,
        title: data.title
    }
};

