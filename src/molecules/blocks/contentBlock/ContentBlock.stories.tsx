import React from 'react';
import data from "./ContentBlock.stories.json";
import {Meta, StoryObj} from "@storybook/react";
import {ContentBlock} from "./ContentBlock";

const meta = {
    title: "molecules/blocks/Content Block",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: ContentBlock,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof ContentBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        title: data.title,
        description: data.description,
        cta: data.cta,
        dateFormat: "date",
        url: data.url,
        meta: data.meta,
        category: data.category
    }
};

export const show_more: Story = {
    args: {
        ...Basic.args,
        more: data.more
    }
}

export const with_image: Story = {
    args: {
        ...Basic.args,
        image: {srcSet: data.image.srcSet.Landscape, alt: data.image.alt}
    }
}

export const show_more_with_image: Story = {
    args: {
        ...Basic.args,
        more: data.more,
        image: {srcSet: data.image.srcSet.Landscape, alt: data.image.alt}
    }
}
