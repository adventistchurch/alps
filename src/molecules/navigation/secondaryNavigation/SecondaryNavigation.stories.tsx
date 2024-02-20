import React from 'react';
import {Meta, StoryObj} from "@storybook/react";

import data from "./SecondaryNavigation.stories.json";
import {SecondaryNavigation} from "./SecondaryNavigation";

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

const meta = {
    title: "molecules/navigation/Secondary Navigation",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: SecondaryNavigation,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof SecondaryNavigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        // @ts-ignore
        items: data.items
    }
};

export const with_header: Story = {
    args: {
        ...Basic.args
    },
    decorators: [
        (Story) => (
            <HeaderSimulator>
                <Story/>
            </HeaderSimulator>
        )]
};

export const without_menu_and_search_toggles: Story = {
    args: {
        ...Basic.args,
        showMenu: false,
        showSearch: false
    },
    decorators: [
        (Story) => (
            <HeaderSimulator>
                <Story/>
            </HeaderSimulator>
        )]
};
