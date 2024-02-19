import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import data from "./ChurchInfo.stories.json";
import {ChurchInfo} from "./ChurchInfo";

const meta = {
    title: "molecules/Church Locator/Church Info",
    component: ChurchInfo,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof ChurchInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        title: data.title,
        address: data.address,
        site: data.site,
        siteLabel: data.siteLabel,
    }
};

