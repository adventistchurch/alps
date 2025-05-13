import React from "react";
// @ts-ignore
import {Meta, Story} from "@storybook/react";
import {BodyContent, BodyContentProps} from "./BodyContent";

export default {
    title: "organisms/content/Body Content",
    component: BodyContent,
    argTypes: {}
} as Meta;

const Template: Story<BodyContentProps> = (args: any) =>
    <BodyContent {...args}>Body content goes here...</BodyContent>;
export const Basic = Template.bind({});
