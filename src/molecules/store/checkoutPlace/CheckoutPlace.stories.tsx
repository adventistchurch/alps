import React from "react";
import {Meta, Story} from "@storybook/react";
import data from "./CheckoutPlace.stories.json";
import {CheckoutPlace, CheckoutPlaceProps} from "./CheckoutPlace";

export default {
    title: "molecules/store/Checkout Place",
    component: CheckoutPlace,
    argTypes: {
        heading: {
            defaultValue: data.heading,
            control: {type: "text"}
        }
    }
} as Meta;

const Template: Story<CheckoutPlaceProps> = (args) =>
    <CheckoutPlace {...args}/>;
export const Basic = Template.bind({});
