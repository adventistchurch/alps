import React from "react";
import {Meta, Story} from "@storybook/react";
import data from "./ChurchInfo.stories.json";
import {ChurchInfo, ChurchInfoProps} from "./ChurchInfo";

export default {
    title: "molecules/Church Locator/Church Info",
    component: ChurchInfo,
    argTypes: {
        title: {
            defaultValue: data.title,
            control: {type: "text"}
        },
        address: {
            defaultValue: data.address,
            control: {type: "text"}
        },
        site: {
            defaultValue: data.site,
            control: {type: "text"}
        },
        siteLabel: {
            defaultValue: data.siteLabel,
            control: {type: "text"}
        }
    }
} as Meta;

const Template: Story<ChurchInfoProps> = (args) =>
    <ChurchInfo {...args}/>;
export const Basic = Template.bind({});

