import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import data from "./CheckoutPlace.stories.json";
import {CheckoutPlace} from "./CheckoutPlace";

const meta = {
    title: "molecules/store/Checkout Place",
    component: CheckoutPlace,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof CheckoutPlace>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        heading: data.heading
    }
};
