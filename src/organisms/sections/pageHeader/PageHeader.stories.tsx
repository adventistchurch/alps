import React from "react";
import {Meta, Story} from "@storybook/react";

import data from "./PageHeader.stories.json";
import {PageHeader, PageHeaderProps} from "./PageHeader";

export default {
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
    }
} as Meta;

const Template: Story<PageHeaderProps> = (args) =>
    <PageHeader {...args}/>
export const Basic = Template.bind({});

export const with_background = Template.bind({});
with_background.argTypes = {
    background: {
        defaultValue: data.background,
        control: {type: "object"}
    }
}

