import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import {VideoFull} from "./VideoFull";

const meta = {
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
    },
    tags: ['autodocs']
} satisfies Meta<typeof VideoFull>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        srcVideo: {
            src: "https://www.youtube.com/embed/QPNxmEviUOg",
            frameBorder: 0,
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: true
        }
    }
};

