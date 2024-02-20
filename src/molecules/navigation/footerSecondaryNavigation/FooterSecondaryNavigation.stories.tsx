import React from 'react';
import {Meta, StoryObj} from "@storybook/react";

import data from "./FooterSecondaryNavigation.stories.json";
import {FooterSecondaryNavigation} from "./FooterSecondaryNavigation";

const meta = {
    title: "molecules/navigation/Footer Secondary Navigation",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: FooterSecondaryNavigation,
    argTypes: {}
} satisfies Meta<typeof FooterSecondaryNavigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        items: data.items
    }
};