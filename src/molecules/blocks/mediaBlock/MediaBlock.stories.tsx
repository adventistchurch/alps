import React from 'react';
import data from "./MediaBlock.stories.json";
import {Meta, Story} from "@storybook/react";
import {MediaBlock, MediaBlockProps} from "./MediaBlock";

export default {
    title: "molecules/blocks/Media Block",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: MediaBlock,
    argTypes: {
        title: {
            defaultValue: data.title,
            control: {type: "text"}
        },
        titlePrefix: {
            defaultValue: data.titlePrefix,
            control: {type: "text"}
        },
        description: {
            defaultValue: data.description,
            control: {type: "text"}
        },
        date: {
            defaultValue: data.date,
            control: {type: "text"}
        },
        category: {
            defaultValue: data.category,
            control: {type: "text"}
        },
        ctaIcon: {
            defaultValue: data.ctaIcon,
            control: {type: "text"}
        },
        kicker: {
            defaultValue: data.kicker,
            control: {type: "text"}
        },
        url: {
            defaultValue: data.url,
            control: {type: "text"}
        },
        image: {
            defaultValue: data.image,
            control: {type: "object"}
        },
        mediaIcon: {
            defaultValue: "audio",
            control: {type: "select"}
        },
        kickerAs: {
            defaultValue: "h1",
            control: {type: "select"}
        },
        dateFormat: {
            defaultValue: "date",
            control: {type: "select"}
        },
    },
} as Meta;

const Template: Story<MediaBlockProps> = (args) => <MediaBlock {...args} />

export const Basic = Template.bind({});

export const Inline = Template.bind({});
Inline.args = {
    type: "inline"
}

export const Feature = Template.bind({});
Feature.args = {
    type: "feature"
}

export const Inset = Template.bind({});
Inset.args = {
    type: "inset"
}

export const Stacked = Template.bind({});
Stacked.args = {
    type: "stacked"
}

export const with_image_caption = Template.bind({});
with_image_caption.args = {
    type: "row",
    imageCaption: "@2020 Photographer Name"
}
