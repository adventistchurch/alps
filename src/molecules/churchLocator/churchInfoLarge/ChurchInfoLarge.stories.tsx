import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import data from "./ChurchInfoLarge.stories.json";
import {ChurchInfoLarge} from "./ChurchInfoLarge";

const meta = {
    title: "molecules/Church Locator/Church Info Large",
    component: ChurchInfoLarge,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof ChurchInfoLarge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        location: data.location,
        address: data.address,
        phone: data.phone,
        mail: data.mail,
        site: data.site,
        serviceList: data.serviceList,
        buttonLabel: data.buttonLabel,
        imageCaption: data.imageCaption,
        image: data.image
    }
};

