import React from 'react';
import {Meta, StoryObj} from "@storybook/react";
import {Pagination} from "./Pagination";

import data from "./Pagination.stories.json";

const meta = {
    title: "molecules/navigation/Pagination",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: Pagination,
    argTypes: {},
    tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        page: data.default.page,
        nextLabel: "Next Label",
        prevLabel: "Prev Label",
        dividerLabel: data.default.dividerLabel,
        surrounding: data.default.surrounding,
        showFirstAndLast: data.default.showFirstAndLast,
        showPrevAndNext: data.default.showPrevAndNext,
        total: data.default.total
    }
};