import React from 'react';
import {Meta, Story} from "@storybook/react";

import data from "./FooterSecondaryNavigation.stories.json";
import {FooterSecondaryNavigation, FooterSecondaryNavigationProps} from "./FooterSecondaryNavigation";

export default {
    title: "molecules/navigation/Footer Secondary Navigation",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: FooterSecondaryNavigation,
    argTypes: {
        items: {
            defaultValue: data.items,
            control: {type: "object"}
        }
    }
} as Meta;

const Template: Story<FooterSecondaryNavigationProps> = (args) => <FooterSecondaryNavigation {...args} />

export const Basic = Template.bind({});