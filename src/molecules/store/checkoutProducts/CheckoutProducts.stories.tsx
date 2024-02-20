import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import data from "./CheckoutProducts.stories.json";
import {CheckoutProducts} from "./CheckoutProducts";

const meta = {
    title: "molecules/store/Checkout Products",
    component: CheckoutProducts,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof CheckoutProducts>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        items: data.items
    }
};
