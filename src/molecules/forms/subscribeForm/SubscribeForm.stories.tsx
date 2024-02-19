import React from "react";
import {Meta, StoryObj} from '@storybook/react';
import {SubscribeForm} from "./SubscribeForm";
import data from "./SubscribeForm.stories.json";

const meta = {
    title: "molecules/forms/Subscribe Form",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: SubscribeForm,
    argTypes: {}
} satisfies Meta<typeof SubscribeForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        title: data.title,
        submitLabel: data.submitLabel,
        cancelLabel: data.cancelLabel
    }
};
