import React from "react";
import {Meta, Story} from "@storybook/react";
import data from "./Totals.stories.json";
import {Totals, TotalsProps} from "./Totals";

export default {
    title: "molecules/store/Totals",
    component: Totals,
    argTypes: {
        total: {
            defaultValue: data.total,
            control: {type: "number"}
        },
        subTotal: {
            defaultValue: data.subTotal,
            control: {type: "number"}
        },
    }
} as Meta;

const Template: Story<TotalsProps> = (args) =>
    <Totals {...args}/>;
export const Basic = Template.bind({});
