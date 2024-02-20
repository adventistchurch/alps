import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import data from "./CartAdd.stories.json";
import {CartAdd} from "./CartAdd";

const meta = {
    title: "molecules/store/Cart Add",
    component: CartAdd,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof CartAdd>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        title: data.title,
        optionsLabel: data.optionsLabel,
        options: data.options,
        chooseAmountLabel: data.chooseAmountLabel,
        chooseAmountDesc: data.chooseAmountDesc,
        buttonLabel: data.buttonLabel,
    }
};
