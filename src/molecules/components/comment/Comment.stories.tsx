import React from 'react';
import {Meta, Story} from "@storybook/react";
import {Comment, CommentProps} from "./Comment";
import data from "./Comment.stories.json";
import {dateFormats, dateFormatsMap} from "../../../helpers/DateTimeFormat";

export default {
    title: "molecules/components/Comment",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: Comment,
    argTypes: {
        avatar: {
            defaultValue: data.avatar,
            control: {type: "text"}
        },
        date: {
            control: {type: "date"}
        },
        dateFormat: {
            defaultValue: dateFormatsMap.date,
            options: dateFormats,
            control: {type: "select"}
        },
        byline: {
            defaultValue: data.byline,
            control: {type: "text"}
        },
        bylineLink: {
            defaultValue: data.bylineLink,
            control: {type: "text"}
        },
        text: {
            defaultValue: data.comment,
            control: {type: "text"}
        },
    }
} as Meta;

const Template: Story<CommentProps> = (args) => <Comment {...args} />

export const Basic = Template.bind({});