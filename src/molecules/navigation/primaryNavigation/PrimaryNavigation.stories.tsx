import React from 'react';
import {Meta, Story} from "@storybook/react";

import data from "./PrimaryNavigation.stories.json";
import {PrimaryNavigation, PrimaryNavigationProps} from "../primaryNavItem/PrimaryNavigation";

interface HeaderSimulatorProps {
    children?: React.ReactNode
}

const HeaderSimulator = ({children}: HeaderSimulatorProps): JSX.Element => {
    return (
        <div className="c-header">
            <div className="c-header__nav-primary">
                {children}
            </div>
        </div>
    )
}

export default {
    title: "molecules/navigation/Primary Navigation",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: PrimaryNavigation,
    argTypes: {
        items: {
            defaultValue: data.items,
            control: {type: "object"}
        }
    }
} as Meta;

const Template: Story<PrimaryNavigationProps> = (args) =>
    <HeaderSimulator>
        <PrimaryNavigation {...args} />
    </HeaderSimulator>

export const Basic = Template.bind({});
