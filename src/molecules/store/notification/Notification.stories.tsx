import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import data from "./Notification.stories.json";
import {Notification} from "./Notification";

const meta = {
    title: "molecules/store/Notification",
    component: Notification,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof Notification>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        content: data.content
    }
};
