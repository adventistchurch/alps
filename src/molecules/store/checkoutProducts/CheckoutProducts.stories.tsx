import React from "react";
import {Meta, Story} from "@storybook/react";
import data from "./CheckoutProducts.stories.json";
import {CheckoutProducts, CheckoutProductsProps} from "./CheckoutProducts";

export default {
    title: "molecules/store/Checkout Products",
    component: CheckoutProducts,
    argTypes: {
        items: {
            defaultValue: data.items,
            control: {type: "object"}
        }
    }
} as Meta;

const Template: Story<CheckoutProductsProps> = (args) =>
    <CheckoutProducts {...args}/>;
export const Basic = Template.bind({});
