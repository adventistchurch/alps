import React from 'react';
import {Meta, StoryObj} from "@storybook/react";
import {Picture} from "./Picture";
import data from './Picture.stories.json';

const meta = {
    title: "atoms/images/Picture",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: Picture,
    argTypes: {
        image: {
            defaultValue: {
                srcSet: data.Landscape,
                alt: data.alt
            },
            control: {type: "object"}
        },
        lazy: {
            defaultValue: false,
            control: {type: "boolean"}
        }
    },
} satisfies Meta<typeof Picture>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Landscape: Story = {
    args: {
        image: {
            srcSet: data.Landscape,
            alt: data.alt
        }
    }
}

export const Portrait: Story = {
    args: {
        image: {
            srcSet: data.Portrait,
            alt: data.alt
        }
    }
}

export const Square: Story = {
    args: {
        image: {
            srcSet: data.Square,
            alt: data.alt
        }
    }
}
