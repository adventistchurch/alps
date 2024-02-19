import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import data from "./Aside.stories.json";
import {Aside} from "./Aside";
import {BlockWrap} from "./BlockWrap";

const meta = {
    title: "organisms/aside/Aside",
    component: Aside,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof Aside>;

export default meta;

type Story = StoryObj<typeof meta>;

export const mediaAside: Story = {
    args: {
        children: <BlockWrap type="mediaBlock" title={data.media.title} linkLabel={data.media.linkLabel}
                             linkUrl={data.media.linkUrl} items={data.media.items}/>
    }
};

export const commentsAside: Story = {
    args: {
        children: <BlockWrap type="contentBlock" title={data.comments.title} linkLabel={data.comments.linkLabel}
                             linkUrl={data.comments.linkUrl} items={data.comments.items}/>
    }
};
