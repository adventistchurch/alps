import React from 'react';
import data from "./CtaBlock.stories.json";
import {Meta, Story} from "@storybook/react";
import {CtaBlock, CtaBlockProps} from "./CtaBlock";

export default {
    title: "molecules/blocks/CTA Block",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: CtaBlock,
    argTypes: {
        title: {
            defaultValue: data.title,
            control: {type: "text"}
        },
        description: {
            defaultValue: data.description,
            control: {type: "text"}
        },
        buttons: {
            defaultValue: data.buttons,
            control: {type: "object"}
        },
        picture: {
            defaultValue: data.picture,
            control: {type: "object"}
        },
        asBackgroundImage: {
            name: "As Background Image",
            defaultValue: false,
            control: {type: "boolean"}
        }
    }
} as Meta;

const Template: Story<CtaBlockProps> = (args) => <CtaBlock {...args} />

export const Basic = Template.bind({});