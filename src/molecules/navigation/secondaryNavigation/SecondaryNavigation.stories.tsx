import React from 'react';
import {Meta, Story} from "@storybook/react";

import data from "./SecondaryNavigation.stories.json";
import {SecondaryNavigation, SecondaryNavigationProps} from "./SecondaryNavigation";

interface HeaderSimulatorProps {
    enabled?: boolean,
    children?: React.ReactNode
}

const HeaderSimulator = ({enabled = false, children}: HeaderSimulatorProps): JSX.Element => {
    return enabled ? (
        <div className="c-header">
            <div className="c-header__nav-secondary">{children}</div>
        </div>
    ) : (
        children
    ) as JSX.Element;
}

export default {
    title: "molecules/navigation/Secondary Navigation",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: SecondaryNavigation,
    argTypes: {
        items: {
            defaultValue: data.items,
            control: {type: "object"}
        }
    }
} as Meta;

const Template: Story<SecondaryNavigationProps> = (args) =>
    <HeaderSimulator>
        <SecondaryNavigation {...args} />
    </HeaderSimulator>

export const Basic = Template.bind({});

const TemplateWithinHeader: Story<SecondaryNavigationProps> = (args) =>
    <HeaderSimulator enabled={true}>
        <SecondaryNavigation {...args} />
    </HeaderSimulator>

export const with_header = TemplateWithinHeader.bind({});

export const without_menu_and_search_toggles = Template.bind({});
without_menu_and_search_toggles.args = {
    showMenu: false,
    showSearch: false
}