import React from "react";
import {Meta, Story} from "@storybook/react";
import data from "./Product.stories.json";
import {Product, ProductItem} from "./Product";

export default {
    title: "molecules/store/Product",
    component: Product,
    argTypes: {
        image: {
            defaultValue: data.image,
            control: {type: "object"}
        },
        title: {
            defaultValue: data.title,
            control: {type: "text"}
        },
        description: {
            defaultValue: data.description,
            control: {type: "text"}
        },
        content: {
            defaultValue: data.content,
            control: {type: "text"}
        },
        price: {
            defaultValue: data.price,
            control: {type: "number"}
        },
        productName: {
            defaultValue: data.productName,
            control: {type: "text"}
        },
        author: {
            defaultValue: data.author,
            control: {type: "text"}
        },
        tags: {
            defaultValue: data.tags,
            control: {type: "object"}
        }
    }
} as Meta;

const Template: Story<ProductItem> = (args) =>
    <Product {...args}/>;
export const Basic = Template.bind({});
