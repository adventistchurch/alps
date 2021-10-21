import React from "react";
import {Meta, Story} from "@storybook/react";
import data from "./CartItemSummary.stories.json";
import {CartItemSummary, CartItemSummaryProps} from "./CartItemSummary";

export default {
    title: "molecules/store/Cart Item Summary",
    component: CartItemSummary,
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
        }
    }
} as Meta;

const Template: Story<CartItemSummaryProps> = (args) =>
    <CartItemSummary {...args}/>;
export const Basic = Template.bind({});
