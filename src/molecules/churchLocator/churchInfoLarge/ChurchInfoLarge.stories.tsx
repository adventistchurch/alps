import React from "react";
import {Meta, Story} from "@storybook/react";
import data from "./ChurchInfoLarge.stories.json";
import {ChurchInfoLarge, ChurchInfoLargeProps} from "./ChurchInfoLarge";

export default {
    title: "molecules/Church Locator/Church Info Large",
    component: ChurchInfoLarge,
    argTypes: {
        location: {
            defaultValue: data.location,
            control: {type: "text"}
        },
        address: {
            defaultValue: data.address,
            control: {type: "text"}
        },
        phone: {
            defaultValue: data.phone,
            control: {type: "text"}
        },
        mail: {
            defaultValue: data.mail,
            control: {type: "text"}
        },
        site: {
            defaultValue: data.site,
            control: {type: "text"}
        },
        serviceList: {
            defaultValue: data.serviceList,
            control: {type: "object"}
        },
        buttonLabel: {
            defaultValue: data.buttonLabel,
            control: {type: "text"}
        },
        imageCaption: {
            defaultValue: data.imageCaption,
            control: {type: "text"}
        },
        image: {
            defaultValue: data.image,
            control: {type: "text"}
        }
    }
} as Meta;

const Template: Story<ChurchInfoLargeProps> = (args) =>
    <ChurchInfoLarge {...args}/>;
export const Basic = Template.bind({});

