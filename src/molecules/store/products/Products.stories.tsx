import React from "react";
import {Meta, Story} from "@storybook/react";
import data from "./Products.stories.json";
import {Products, ProductsProps, productsTypes} from "./Products";

export default {
    title: "molecules/store/Products",
    component: Products,
    argTypes: {
        title: {
            defaultValue: data.title,
            control: {type: "text"}
        },
        items: {
            defaultValue: data.items,
            control: {type: "object"}
        },
        type: {
            defaultValue: "cards",
            options: productsTypes,
            control: {type: "select"}
        },
    }
} as Meta;

const Template: Story<ProductsProps> = (args) =>
    <Products {...args}/>;
export const Basic = Template.bind({});

export const List = Template.bind({});
List.args = {
    type: "list",
    items: data.listItems
}

export const Row = Template.bind({});
Row.args = {
    type: "row",
    items: data.rowList
}
