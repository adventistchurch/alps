import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import data from "./CartItemSummary.stories.json";
import {CartItemSummary} from "./CartItemSummary";

const meta = {
    title: "molecules/store/Cart Item Summary",
    component: CartItemSummary,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof CartItemSummary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        title: data.title,
        count: data.count,
        price: data.price
    }
};
