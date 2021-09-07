import {Video, VideoProps} from "./Video";
import {videoConfig} from "./_config";
import {Meta, Story} from "@storybook/react";

export default {
    title: "components/Video",
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
} as Meta;

// eslint-disable-next-line react/react-in-jsx-scope
const Template: Story<VideoProps> = (args) => <Video {...args}/>;

export const Default = Template.bind({});