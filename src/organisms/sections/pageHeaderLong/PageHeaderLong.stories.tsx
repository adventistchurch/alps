import React from "react";
import {Meta, StoryObj} from "@storybook/react";

import data from "./PageHeaderLong.stories.json";
import {PageHeaderLong} from "./PageHeaderLong";

const meta = {
    title: "organisms/sections/Page Header Long Form",
    component: PageHeaderLong,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof PageHeaderLong>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        kicker: data.kicker,
        title: data.title,
    }
};

export const with_link: Story = {
    args: {
        ...Basic.args,
        url: data.url
    }
};

export const with_image: Story = {
    args: {
        ...Basic.args,
        background: data.background
    }
};

export const with_subtitle: Story = {
    args: {
        ...Basic.args,
        subtitle: data.subtitle,
        url: data.url,
        background: data.background
    }
};

