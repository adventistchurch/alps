import React from "react";
import {Meta, Story} from "@storybook/react";
import data from "./Aside.stories.json";
import {Aside, AsideProps} from "./Aside";
import {BlockWrap} from "./BlockWrap";

export default {
    title: "organisms/aside/Aside",
    component: Aside,
    argTypes: {}
} as Meta;

export const mediaAside = <BlockWrap type="mediaBlock" title={data.media.title} linkLabel={data.media.linkLabel} linkUrl={data.media.linkUrl} items={data.media.items}/>;
export const commentsAside = <BlockWrap type="contentBlock" title={data.comments.title} linkLabel={data.comments.linkLabel} linkUrl={data.comments.linkUrl} items={data.comments.items}/>;

const Template: Story<AsideProps> = (args) => {

    return (
        <Aside {...args}>
          {mediaAside}
          {commentsAside}
        </Aside>
    )
}
export const Basic = Template.bind({});

