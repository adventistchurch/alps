import React from "react";
import {Meta, StoryObj} from "@storybook/react";

import data from "./PageHeader.stories.json";
import {PageHeader} from "./PageHeader";

const meta = {
    title: "organisms/sections/Page Header",
    component: PageHeader,
    argTypes: {
        url: {
            defaultValue: data.url,
            control: {type: "text"}
        },
        title: {
            defaultValue: data.title,
            control: {type: "text"}
        }
    },
    tags: ['autodocs']
} satisfies Meta<typeof PageHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        url: data.url,
        title: data.title
    }
};

export const with_background: Story = {
    args: {
        ...Basic.args,
        background: data.background,
    }
};


