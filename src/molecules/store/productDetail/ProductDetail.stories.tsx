import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import data from "./ProductDetail.stories.json";
import {ProductDetail} from "./ProductDetail";

const meta = {
    title: "molecules/store/Product Detail",
    component: ProductDetail,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof ProductDetail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        image: data.image,
        title: data.title,
        description: data.description,
        content: data.content
    }
};
