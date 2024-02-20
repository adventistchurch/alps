import React from 'react';
import {Meta, StoryObj} from "@storybook/react";

import data from "./PrimaryNavigation.stories.json";
import {PrimaryNavigation, PrimaryNavigationProps} from "./PrimaryNavigation";
import {JSX} from 'react/jsx-runtime';

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

const meta = {
    title: "molecules/navigation/Primary Navigation",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    decorators: [
        (Story) => (
            <HeaderSimulator>
                <Story />
            </HeaderSimulator>
        )
    ],
    component: PrimaryNavigation,
    argTypes: {}
} satisfies Meta<typeof PrimaryNavigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        // @ts-ignore
        items: data.items
    }
}