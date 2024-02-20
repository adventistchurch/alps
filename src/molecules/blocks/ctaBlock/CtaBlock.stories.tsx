import React from 'react';
import data from "./CtaBlock.stories.json";
import {Meta, StoryObj} from "@storybook/react";
import {CtaBlock} from "./CtaBlock";

const meta = {
    title: "molecules/blocks/CTA Block",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: CtaBlock,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof CtaBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        title: data.title,
        description: data.title,
        // @ts-ignore
        buttons: data.buttons,
        picture: data.picture,
        // @ts-ignore
        asBackgroundImage: data.asBackgroundImage,
    }
};