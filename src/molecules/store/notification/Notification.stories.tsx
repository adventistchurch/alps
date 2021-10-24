import React from "react";
import {Meta, Story} from "@storybook/react";
import data from "./Notification.stories.json";
import {Notification, NotificationProps} from "./Notification";

export default {
    title: "molecules/store/Notification",
    component: Notification,
    argTypes: {
        content: {
            defaultValue: data.content,
            control: {type: "text"}
        }
    }
} as Meta;

const Template: Story<NotificationProps> = (args) =>
    <Notification {...args}/>;
export const Basic = Template.bind({});
