import React from 'react';
import data from "./ContentBlockExpand.stories.json";
import {Meta, Story} from "@storybook/react";
import {ContentBlockExpand, ContentBlockExpandProps} from "./ContentBlockExpand";

export default {
    title: "molecules/Content Block Expand",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: ContentBlockExpand,
    argTypes: {
        title: {
            defaultValue: data.title,
            control: {type: "text"}
        },
        description: {
            defaultValue: data.description,
            control: {type: "text"}
        },
        kicker: {
            defaultValue: data.kicker,
            control: {type: "text"}
        },
    },
} as Meta;

const Template: Story<ContentBlockExpandProps> = (args) => <ContentBlockExpand {...args} />

export const Basic = Template.bind({});