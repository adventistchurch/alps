import React from "react";
import {Meta, Story} from "@storybook/react";
import data from "./Sabbath.stories.json";
import {Sabbath, SabbathProps} from "./Sabbath";

export default {
    title: "organisms/aside/Sabbath",
    component: Sabbath,
    argTypes: {
    }
} as Meta;

const Template: Story<SabbathProps> = (args) =>
    <Sabbath {...args}/>;
export const Basic = Template.bind({});

export const with_background = Template.bind({});
with_background.args = {
  backgroundImage: data.backgroundImage
}

