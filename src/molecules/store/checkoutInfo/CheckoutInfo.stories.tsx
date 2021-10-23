import React from "react";
import {Meta, Story} from "@storybook/react";
import data from "./CheckoutInfo.stories.json";
import {CheckoutInfo, CheckoutInfoProps} from "./CheckoutInfo";

export default {
    title: "molecules/store/Checkout Info",
    component: CheckoutInfo,
    argTypes: {
        title: {
            defaultValue: data.title,
            control: {type: "text"}
        },
        heading: {
            defaultValue: data.heading,
            control: {type: "text"}
        },
        description: {
            defaultValue: data.description,
            control: {type: "text"}
        }
    }
} as Meta;

const Template: Story<CheckoutInfoProps> = (args) =>
    <CheckoutInfo {...args}/>;
export const Basic = Template.bind({});
