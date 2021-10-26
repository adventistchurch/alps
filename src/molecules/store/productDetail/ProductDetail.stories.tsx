import React from "react";
import {Meta, Story} from "@storybook/react";
import data from "./ProductDetail.stories.json";
import {ProductDetail, ProductDetailProps} from "./ProductDetail";

export default {
    title: "molecules/store/Product Detail",
    component: ProductDetail,
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
        }
    }
} as Meta;

const Template: Story<ProductDetailProps> = (args) =>
    <ProductDetail {...args}/>;
export const Basic = Template.bind({});
