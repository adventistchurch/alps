import React from 'react';
import {Meta, Story} from "@storybook/react";
import {ShareTools, ShareToolsProps} from "./ShareTools";

export default {
    title: "molecules/components/ShareTools",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: ShareTools
} as Meta;

const Template: Story<ShareToolsProps> = (args) => <ShareTools {...args} />

export const Basic = Template.bind({});