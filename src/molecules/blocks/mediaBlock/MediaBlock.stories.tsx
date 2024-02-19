import React from 'react';
import data from "./MediaBlock.stories.json";
import {Meta, StoryObj} from "@storybook/react";
import {MediaBlock} from "./MediaBlock";

const meta = {
    title: "molecules/blocks/Media Block",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: MediaBlock,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof MediaBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        title: data.title,
        titlePrefix: data.titlePrefix,
        description: data.description,
        date: 1707685200000,
        category: data.category,
        // @ts-ignore
        ctaIcon: data.ctaIcon,
        kicker: data.kicker,
        url: data.url,
        image: data.image,
        mediaIcon: "audio",
        kickerAs: "h1",
        dateFormat: "datetime",
    }
};

export const Inline: Story = {
    args: {
        ...Basic.args,
        type: "inline"
    }
}

export const Feature: Story = {
    args: {
        ...Basic.args,
        type: "feature"
    }
}

export const Inset: Story = {
    args: {
        ...Basic.args,
        type: "inset"
    }
}

export const Stacked: Story = {
    args: {
        ...Basic.args,
        type: "stacked"
    }
}

export const with_image_caption: Story = {
    args: {
        ...Basic.args,
        type: "row",
        imageCaption: "@2020 Photographer Name"
    }
}

