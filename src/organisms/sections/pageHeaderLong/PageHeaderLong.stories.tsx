import React from "react";
import {Meta, Story} from "@storybook/react";

import data from "./PageHeaderLong.stories.json";
import {PageHeaderLong, PageHeaderLongProps} from "./PageHeaderLong";

export default {
    title: "organisms/sections/Page Header Long Form",
    component: PageHeaderLong,
    argTypes: {
        kicker: {
            defaultValue: data.kicker,
            control: {type: "text"}
        },
        title: {
            defaultValue: data.title,
            control: {type: "text"}
        }
    }
} as Meta;

const Template: Story<PageHeaderLongProps> = (args) =>
    <PageHeaderLong {...args}/>
export const Basic = Template.bind({});

export const with_link = Template.bind({});
with_link.args = {
    url: data.url
}

export const with_image = Template.bind({});
with_image.args = {
    background: data.background
}

export const with_subtitle = Template.bind({});
with_subtitle.args = {
    subtitle: data.subtitle,
    url: data.url,
    background: data.background
}
