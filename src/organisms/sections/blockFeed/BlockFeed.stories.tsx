import React from "react";
import {Meta, Story} from "@storybook/react";
import {BlockFeed, BlockFeedProps} from "./BlockFeed";

import data from "./BlockFeed.stories.json";

export default {
    title: "organisms/sections/Block Feed",
    component: BlockFeed,
    argTypes: {
        blocks: {
            defaultValue: data.blocks,
            control: {type: "object"}
        }
    }
} as Meta;

const Template: Story<BlockFeedProps> = (args) =>
    <BlockFeed {...args}/>
export const Basic = Template.bind({});

