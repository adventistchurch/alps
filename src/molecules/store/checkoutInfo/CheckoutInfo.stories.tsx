import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import data from "./CheckoutInfo.stories.json";
import {CheckoutInfo} from "./CheckoutInfo";

const meta = {
    title: "molecules/store/Checkout Info",
    component: CheckoutInfo,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof CheckoutInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        title: data.title,
        heading: data.heading,
        description: data.description
    }
};
