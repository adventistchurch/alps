import React from "react";
import {Meta, StoryObj} from "@storybook/react";

import data from "./PageHeaderFeature.stories.json";
import dataColumns from "./PageHeaderFeatureColumns.stories.json";
import dataFull from "./PageHeaderFeatureFull.stories.json";
import dataLongForm from "./PageHeaderFeatureLongform.stories.json";
import {PageHeaderFeature} from "./PageHeaderFeature";

const meta = {
    title: "organisms/sections/Page Header Feature",
    component: PageHeaderFeature,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof PageHeaderFeature>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        blockType: "feature",
        hasScroll: false,
        // @ts-ignore
        blocks: [data]
    }
};

export const Columns: Story = {
    args: {
        blockType: "column",
        hasScroll: false,
        // @ts-ignore
        blocks: dataColumns.blocks
    }
};

export const Full: Story = {
    args: {
        blockType: "full",
        // @ts-ignore
        blocks: dataFull.blocks,
        hasScroll: dataFull.hasScroll
    }
};

export const LongForm: Story = {
    args: {
        blockType: "longform",
        // @ts-ignore
        blocks: dataLongForm.blocks
    }
};

