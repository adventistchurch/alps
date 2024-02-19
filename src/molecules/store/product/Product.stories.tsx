import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import data from "./Product.stories.json";
import {Product} from "./Product";

const meta = {
    title: "molecules/store/Product",
    component: Product,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof Product>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        image: data.image,
        title: data.title,
        // @ts-ignore
        description: data.description,
        content: data.content,
        price: data.price,
        productName: data.productName,
        author: data.author,
        tags: data.tags
    }
};
