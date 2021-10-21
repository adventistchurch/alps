import React from "react";
import {Meta, Story} from "@storybook/react";
import data from "./CartItem.stories.json";
import {CartItem, CartItemProps} from "./CartItem";

export default {
    title: "molecules/store/Cart Item",
    component: CartItem,
    argTypes: {
        title: {
            defaultValue: data.title,
            control: {type: "text"}
        },
        count: {
            defaultValue: data.count,
            control: {type: "number"}
        },
        price: {
            defaultValue: data.price,
            control: {type: "number"}
        },
        image: {
            defaultValue: data.image,
            control: {type: "object"}
        },
    }
} as Meta;

const Template: Story<CartItemProps> = (args) =>
    <CartItem {...args}/>;
export const Basic = Template.bind({});
