import React from 'react';
import {Meta, StoryObj} from "@storybook/react";
import {Comment} from "./Comment";
import data from "./Comment.stories.json";

const meta = {
    title: "molecules/components/Comment",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: Comment,
    argTypes: { date: { control: 'date' }},
    tags: ['autodocs']
} satisfies Meta<typeof Comment>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        avatar: data.avatar,
        date: 1707771600000,
        dateFormat: "datetime",
        byline: data.byline,
        bylineLink: data.bylineLink,
        text: data.comment,
        editUrl: data.editUrl,
        editLabel: data.editLabel,
        replyUrl: data.replyUrl,
        replyLabel: data.replyLabel
    }
};