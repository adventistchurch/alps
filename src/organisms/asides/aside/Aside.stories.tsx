import React from "react";
import {Meta, Story} from "@storybook/react";
import data from "./Aside.stories.json";
import {Aside, AsideProps} from "./Aside";
import {BlockWrap} from "./BlockWrap";

export default {
    title: "organisms/aside/Aside",
    component: Aside,
    argTypes: {

    }
} as Meta;

const Template: Story<AsideProps> = (args) => {
    const media = <BlockWrap type="mediaBlock" title={data.media.title} linkLabel={data.media.linkLabel} linkUrl={data.media.linkUrl} items={data.media.items}/>
    const comments = <BlockWrap type="contentBlock" title={data.comments.title} linkLabel={data.comments.linkLabel} linkUrl={data.comments.linkUrl} items={data.comments.items}/>

    return (
        <Aside {...args}>
          {media}
          {comments}
        </Aside>
    )
}
export const Basic = Template.bind({});

