import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import {Byline} from "./Byline";
import data from "./Byline.stories.json";

const meta = {
    title: "molecules/text/Byline",
    component: Byline,
    argTypes: {
        value: {
            defaultValue: data.textValue,
            control: {type: "text"}
        }
    }
} satisfies Meta<typeof Byline>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        value: data.textValue
    }
};