import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import data from "./CheckoutBilling.stories.json";
import {CheckoutBilling} from "./CheckoutBilling";

const meta = {
    title: "molecules/store/Checkout Billing",
    component: CheckoutBilling,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof CheckoutBilling>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        heading: data.heading,
        countryOptions: data.countryOptions,
        stateOptions: data.stateOptions
    }
};
