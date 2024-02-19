import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import data from "./CartItem.stories.json";
import {CartItem} from "./CartItem";

const meta = {
    title: "molecules/store/Cart Item",
    component: CartItem,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof CartItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        title: data.title,
        price: data.price,
        image: data.image
    }
};
