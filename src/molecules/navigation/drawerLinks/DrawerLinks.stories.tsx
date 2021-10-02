import React from 'react';
import {Meta, Story} from "@storybook/react";

import data from "./DrawerLinks.stories.json";
import {DrawerLinks, DrawerLinksProps} from "./DrawerLinks";

export default {
    title: "molecules/navigation/Drawer Links",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: DrawerLinks,
    argTypes: {
        title: {
          defaultValue: data.title,
          control: {type: "text"}
        },
        items: {
            defaultValue: data.items,
            control: {type: "object"}
        }
    }
} as Meta;

const Template: Story<DrawerLinksProps> = (args) => <DrawerLinks {...args} />

export const Basic = Template.bind({});