import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import data from "./Products.stories.json";
import {Products} from "./Products";

const meta = {
    title: "molecules/store/Products",
    component: Products,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof Products>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        title: data.title,
        items: data.items,
        type: "cards"
    }
};

export const List: Story = {
    args: {
        title: data.title,
        items: data.listItems,
        type: "list"
    }
};

export const Row: Story = {
    args: {
        title: data.title,
        items: data.rowList,
        type: "row"
    }
};
