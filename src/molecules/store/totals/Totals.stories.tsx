import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import data from "./Totals.stories.json";
import {Totals} from "./Totals";

const meta = {
    title: "molecules/store/Totals",
    component: Totals,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof Totals>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        total: data.total,
        subTotal: data.subTotal,
    }
};
