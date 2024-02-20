import React from 'react';
import {Meta, StoryObj} from "@storybook/react";

import data from "./FooterPrimaryNavigation.stories.json";
import {FooterPrimaryNavigation} from "./FooterPrimaryNavigation";

const meta = {
    title: "molecules/navigation/Footer Primary Navigation",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: FooterPrimaryNavigation,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof FooterPrimaryNavigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        text: "Some text",
        items: data.items
    }
};