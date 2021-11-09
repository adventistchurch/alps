import React from "react";
import {Meta, Story} from "@storybook/react";
import {VideoFull, VideoFullProps} from "./VideoFull";

export default {
    title: "organisms/sections/Video Full",
    component: VideoFull,
    argTypes: {
        srcVideo: {
            defaultValue: {
                src: "https://www.youtube.com/embed/QPNxmEviUOg",
                frameBorder: 0,
                allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: true
            },
            control: {type: "object"}
        }
    }
} as Meta;

const Template: Story<VideoFullProps> = (args) =>
    <VideoFull {...args}/>
export const Basic = Template.bind({});

