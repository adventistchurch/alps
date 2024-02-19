import React from 'react';
import {Meta, StoryObj} from "@storybook/react";
import {Breadcrumbs} from "./Breadcrumbs";

import data from "./Breadcrumbs.stories.json";

const meta = {
    title: "molecules/navigation/Breadcrumbs",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: Breadcrumbs,
    argTypes: {}
} satisfies Meta<typeof Breadcrumbs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        // @ts-ignore
        items: data.items
    }
};