import React from 'react';
import data from "./ContentBlock.stories.json";
import {Meta, Story} from "@storybook/react";
import {ContentBlock, ContentBlockProps} from "./ContentBlock";

export default {
    title: "molecules/blocks/Content Block",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: ContentBlock,
    argTypes: {
        title: {
            defaultValue: data.title,
            control: {type: "text"}
        },
        titleSize: {
            defaultValue: "s",
            control: {type: "select"}
        },
        description: {
            defaultValue: data.description,
            control: {type: "text"}
        },
        cta: {
            defaultValue: data.cta,
            control: {type: "text"}
        },
        dateFormat: {
            defaultValue: "date",
            control: {type: "select"}
        },
        url: {
            defaultValue: data.url,
            control: {type: "text"}
        },
        meta: {
            defaultValue: data.meta,
            control: {type: "tet"}
        },
        category: {
            defaultValue: data.category,
            control: {type: "text"}
        }
    }
} as Meta;

const Template: Story<ContentBlockProps> = (args) => <ContentBlock {...args} />

export const Basic = Template.bind({});

export const show_more = Template.bind({});
show_more.args = {
    more: data.more
}

export const with_image = Template.bind({});
with_image.args = {
    image: { srcSet: data.image.srcSet.Landscape, alt: data.image.alt}
}

export const show_more_with_image = Template.bind({});
show_more_with_image.args = {
    more: data.more,
    image: { srcSet: data.image.srcSet.Landscape, alt: data.image.alt}
}