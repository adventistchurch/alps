import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import {BlockFeed} from "./BlockFeed";

import data from "./BlockFeed.stories.json";

const meta = {
    title: "organisms/sections/Block Feed",
    component: BlockFeed,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof BlockFeed>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        // @ts-ignore
        blocks: data.blocks
    }
};

