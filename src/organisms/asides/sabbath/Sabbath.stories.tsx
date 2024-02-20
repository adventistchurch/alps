import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import data from "./Sabbath.stories.json";
import {Sabbath} from "./Sabbath";

const meta = {
    title: "organisms/aside/Sabbath",
    component: Sabbath,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof Sabbath>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        showLogo: data.showLogo
    }
};

export const with_background: Story = {
    args: {
        backgroundImage: data.backgroundImage
    }
};

