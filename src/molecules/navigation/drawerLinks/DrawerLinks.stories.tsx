import React from 'react';
import {Meta, StoryObj} from "@storybook/react";

import data from "./DrawerLinks.stories.json";
import {DrawerLinks} from "./DrawerLinks";

const meta = {
    title: "molecules/navigation/Drawer Links",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: DrawerLinks,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof DrawerLinks>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        title: data.title,
        items: data.items
    }
};