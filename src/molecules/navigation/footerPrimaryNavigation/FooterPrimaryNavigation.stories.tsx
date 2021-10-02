import React from 'react';
import {Meta, Story} from "@storybook/react";

import data from "./FooterPrimaryNavigation.stories.json";
import {FooterPrimaryNavigation, FooterPrimaryNavigationProps} from "./FooterPrimaryNavigation";

export default {
    title: "molecules/navigation/Footer Primary Navigation",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: FooterPrimaryNavigation,
    argTypes: {
        items: {
            defaultValue: data.items,
            control: {type: "object"}
        }
    }
} as Meta;

const Template: Story<FooterPrimaryNavigationProps> = (args) => <FooterPrimaryNavigation {...args} />

export const Basic = Template.bind({});