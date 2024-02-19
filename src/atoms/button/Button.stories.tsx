import React from 'react';
import {Meta, StoryObj} from '@storybook/react'

import {Button} from './Button';
import {buttonConfig} from "./_config";

import {
    buttonDisableDesc,
    buttonLighterDesc,
    buttonOutlineDesc,
    buttonSimpleDesc,
    buttonSmallDesc, buttonToggleDesc,
    buttonWithIconDesc
} from "./descriptions";
import {ComponentsTypes} from "../../global/commons";

const meta = {
    title: "atoms/Button",
    parameters: {
        componentSubtitle: ComponentsTypes.COMPONENT,
        status: 'released',
        docs: {
            recommended: false,
        }
    },
    component: Button,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        label: buttonConfig.data.label
    }
};

export const Disabled: Story = {
    args: {
        ...Basic.args,
        disabled: true
    },
    parameters: {
        docs: {
            storyDescription: buttonDisableDesc
        }
    }
};

export const Lighter: Story = {
    args: {
        ...Basic.args,
        lighter: true
    },
    parameters: {
        docs: {
            storyDescription: buttonLighterDesc
        }
    }
};

export const Outline: Story = {
    args: {
        ...Basic.args,
        outline: true
    },
    parameters: {
        docs: {
            storyDescription: buttonOutlineDesc
        }
    }
};

export const Simple: Story = {
    args: {
        ...Basic.args,
        simple: true
    },
    parameters: {
        docs: {
            storyDescription: buttonSimpleDesc
        }
    }
};

export const Small: Story = {
    args: {
        ...Basic.args,
        small: true
    },
    parameters: {
        docs: {
            storyDescription: buttonSmallDesc
        }
    }
};

export const with_icon: Story = {
    args: {
        ...Basic.args,
        icon: "arrow-bracket-left"
    },
    parameters: {
        docs: {
            storyDescription: buttonWithIconDesc
        }
    }
};

export const Toggle: Story = {
    args: {
        label: "",
        outline: true,
        small: true,
        toggle: true,
        icon: "plus",
        iconPosition: "left"
    },
    parameters: {
        docs: {
            storyDescription: buttonToggleDesc
        }
    }
};


