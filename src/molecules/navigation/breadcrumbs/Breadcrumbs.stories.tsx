import React from 'react';
import {Meta, Story} from "@storybook/react";
import {Breadcrumbs, BreadcrumbsProps} from "./Breadcrumbs";

import data from "./Breadcrumbs.stories.json";

export default {
    title: "molecules/navigation/Breadcrumbs",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: Breadcrumbs,
    argTypes: {
        items: {
          defaultValue: data.items,
          control: {type: "object"}
        }
    }
} as Meta;

const Template: Story<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />

export const Basic = Template.bind({});