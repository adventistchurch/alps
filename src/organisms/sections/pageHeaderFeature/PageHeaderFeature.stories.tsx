import React from "react";
import {Meta, Story} from "@storybook/react";

import data from "./PageHeaderFeature.stories.json";
import dataColumns from "./PageHeaderFeatureColumns.stories.json";
import dataFull from "./PageHeaderFeatureFull.stories.json";
import dataLongForm from "./PageHeaderFeatureLongform.stories.json";
import {PageHeaderFeature, PageHeaderFeatureProps} from "./PageHeaderFeature";

export default {
    title: "organisms/sections/Page Header Feature",
    component: PageHeaderFeature,
    argTypes: {
        blockType: {
            defaultValue: "feature",
            control: {type: "text"}
        },
        hasScroll: {
            defaultValue: false,
            control: {type: "boolean"}
        },
        blocks: {
            defaultValue: [data],
            control: {type: "object"}
        }
    }
} as Meta;

const Template: Story<PageHeaderFeatureProps> = (args) =>
    <PageHeaderFeature {...args}/>
export const Basic = Template.bind({});

export const Columns = Template.bind({});
Columns.args = {
    blockType: "column",
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    blocks: dataColumns.blocks
}

export const Full = Template.bind({});
Full.args = {
    blockType: "full",
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    blocks: dataFull.blocks,
    hasScroll: dataFull.hasScroll
}

export const LongForm = Template.bind({});
LongForm.args = {
    blockType: "longform",
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    blocks: dataLongForm.blocks
}
