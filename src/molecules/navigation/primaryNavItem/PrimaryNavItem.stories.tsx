import React from 'react';
import {Meta, Story} from "@storybook/react";
import {PrimaryNavItem, PrimaryNavItemProps} from "./PrimaryNavItem";

import data from "./PrimaryNavItem.stories.json";
import {PrimaryNavBase} from "../primaryNavigation/PrimaryNavigation";

interface HeaderSimulatorProps {
    children?: React.ReactNode
}

const HeaderSimulator = ({children}: HeaderSimulatorProps): JSX.Element => {
    return (
        <div className="c-header">
            <div className="c-header__nav-primary">
                <PrimaryNavBase>{children}</PrimaryNavBase>
            </div>
        </div>
    )
}

export default {
    title: "molecules/navigation/Primary Navigation Item",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: PrimaryNavItem,
    argTypes: {
      text: {
        defaultValue: data.text,
        control: {type: "text"}
      },
      url: {
        defaultValue: data.url,
        control: {type: "text"}
      }
    }
} as Meta;

const Template: Story<PrimaryNavItemProps> = (args) =>
    <HeaderSimulator>
        <PrimaryNavItem {...args} />
    </HeaderSimulator>

export const Basic = Template.bind({});

export const with_subMenu = Template.bind({});
with_subMenu.args = {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    subnav: data.subnav
}