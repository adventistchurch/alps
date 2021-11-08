import React from "react";
import {Meta, Story} from "@storybook/react";

import data from "./Comments.stories.json";
import {Comments, CommentsProps} from "./Comments";

export default {
    title: "organisms/sections/Comments",
    component: Comments,
    argTypes: {
        items: {
            defaultValue: data.items,
            control: {type: "object"}
        },
        title: {
            defaultValue: data.title,
            control: {type: "text"}
        }
    }
} as Meta;

const Template: Story<CommentsProps> = (args) =>
    <Comments {...args}/>
export const Basic = Template.bind({});

