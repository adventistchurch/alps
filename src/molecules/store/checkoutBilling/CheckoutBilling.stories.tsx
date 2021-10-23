import React from "react";
import {Meta, Story} from "@storybook/react";
import data from "./CheckoutBilling.stories.json";
import {CheckoutBilling, CheckoutBillingProps} from "./CheckoutBilling";

export default {
    title: "molecules/store/Checkout Billing",
    component: CheckoutBilling,
    argTypes: {
        heading: {
            defaultValue: data.heading,
            control: {type: "text"}
        },
        countryOptions: {
            defaultValue: data.countryOptions,
            control: {type: "object"}
        },
        stateOptions: {
            defaultValue: data.stateOptions,
            control: {type: "object"}
        }
    }
} as Meta;

const Template: Story<CheckoutBillingProps> = (args) =>
    <CheckoutBilling {...args}/>;
export const Basic = Template.bind({});
