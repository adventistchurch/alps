import React from 'react';
import {Meta, Story} from "@storybook/react";
import {Comment} from "../comment/Comment";
import {Comments, CommentsProps} from "./Comments";
import data from "./Comments.stories.json";
import dataComment from "../comment/Comment.stories.json";
import {iconConfig} from "../../../components/icons/_config";

export default {
    title: "molecules/components/Comments",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: Comments,
    argTypes: {
        heading: {
            defaultValue: data.heading,
            controls: {type: "text"}
        },
        icon: {
            options: iconConfig.iconNamesMap,
            defaultValue: "contact",
            control: {type: "select"}
        },
        count: {
            defaultValue: 5,
            control: {type: "number"}
        }
    }
} as Meta;

const Template: Story<CommentsProps> = (args) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const content = [...Array(args.count).keys()].map(i => (
        <Comment key={`comment-${i}`} avatar={dataComment.avatar} byline={dataComment.byline}
                 bylineLink={dataComment.bylineLink} date={13}
                 dateFormat={"datetime"} text={dataComment.comment}/>
    ));

    args.content = content;

    return (
        <Comments {...args} />
    )
}

export const Basic = Template.bind({});