import React from "react";
import {Meta, Story} from "@storybook/react";
import data from "./CartAdd.stories.json";
import {CartAdd, CartAddProps} from "./CartAdd";

export default {
    title: "molecules/store/Cart Add",
    component: CartAdd,
    argTypes: {
        title: {
            defaultValue: data.title,
            control: {type: "text"}
        },
        optionsLabel: {
            defaultValue: data.optionsLabel,
            control: {type: "text"}
        },
        options: {
            defaultValue: data.options,
            control: {type: "object"}
        },
        chooseAmountLabel: {
            defaultValue: data.chooseAmountLabel,
            control: {type: "text"}
        },
        chooseAmountDesc: {
            defaultValue: data.chooseAmountDesc,
            control: {type: "text"}
        },
        buttonLabel: {
            defaultValue: data.buttonLabel,
            control: {type: "text"}
        }
    }
} as Meta;

const Template: Story<CartAddProps> = (args) =>
    <CartAdd {...args}/>;
export const Basic = Template.bind({});
