import React from "react";
import {Meta, Story} from "@storybook/react";
import data from "./RelatedPosts.stories.json";
import {RelatedPosts, RelatedPostsProps} from "./RelatedPostsProps";

export default {
    title: "organisms/aside/Related Posts",
    component: RelatedPosts,
    argTypes: {
      heading: {
            defaultValue: data.heading,
            control: {type: "text"}
        },
      linkText: {
            defaultValue: data.linkText,
            control: {type: "text"}
        },
      url: {
            defaultValue: data.url,
            control: {type: "text"}
        },
      blocks: {
            defaultValue: data.blocks,
            control: {type: "object"}
        }
    }
} as Meta;

const Template: Story<RelatedPostsProps> = (args) =>
    <RelatedPosts {...args}/>;
export const Basic = Template.bind({});

