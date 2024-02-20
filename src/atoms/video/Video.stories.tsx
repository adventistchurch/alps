import {Video} from "./Video";
import {videoConfig} from "./_config";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: "atoms/Video",
    component: Video,
    argTypes: {
        src: {
            name: "Source",
            defaultValue: videoConfig.data.src,
            control: {type: "text"}
        },
        width: {
            name: "Width",
            defaultValue: videoConfig.data.width,
            control: {type: "number"}
        },
        height: {
            name: "Height",
            defaultValue: videoConfig.data.height,
            control: {type: "number"}
        }
    }
} satisfies Meta<typeof Video>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        src: videoConfig.data.src,
        width: videoConfig.data.width,
        height: videoConfig.data.height
    }
}
