import React from 'react';
import {Meta, Story} from '@storybook/react'

import {Button, ButtonProps} from './Button';
import {buttonConfig} from "./_config";
import {iconConfig} from "../icons/_config";
import {
    buttonDisableDesc, buttonLighterDesc, buttonOutlineDesc,
    buttonSimpleDesc,
    buttonSmallDesc,
    buttonToggleDesc,
    buttonWithIconDesc
} from "./descriptions";

export default {
    title: "components/Button",
    markdown: 'hello',
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: Button,
    argTypes: {
        label: {
            name: "Label",
            defaultValue: buttonConfig.data.label,
            control: {type: "text"}
        },
        url: {
            name: "URL",
            defaultValue: buttonConfig.data.url,
            control: {type: "text"}
        },
        as: {
            name: "as",
            defaultValue: buttonConfig.defaultProps.as,
            options: buttonConfig.asOptions,
            control: {type: "select"}
        },
        icon: {
            name: "Icon",
            options: [""].concat(iconConfig.iconNames),
            control: {type: "select"}
        },
        iconPosition: {
            name: "Icon Position",
            defaultValue: "left",
            options: iconConfig.iconPositions.available,
            control: {type: "radio"}
        },
        iconSize: {
            name: "Icon Size",
            defaultValue: "xs",
            options: iconConfig.iconSizes.available,
            control: {type: "inline-radio"}
        }
    },
} as Meta;

const Template: Story<ButtonProps> = (args) =>
    <Button {...args} />

export const Basic = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true
}
Disabled.parameters = {
    docs: {
        storyDescription: buttonDisableDesc
    }
}

export const Lighter = Template.bind({});
Lighter.args = {
    lighter: true
}
Lighter.parameters = {
    docs: {
        storyDescription: buttonLighterDesc
    }
}

export const Outline = Template.bind({});
Outline.args = {
    outline: true
}
Outline.parameters = {
    docs: {
        storyDescription: buttonOutlineDesc
    }
}

export const Simple = Template.bind({});
Simple.args = {
    simple: true
}
Simple.parameters = {
    docs: {
        storyDescription: buttonSimpleDesc
    }
}

export const Small = Template.bind({});
Small.args = {
    small: true
}
Small.parameters = {
    docs: {
        storyDescription: buttonSmallDesc
    }
}

export const with_icon = Template.bind({});
with_icon.argTypes = {
    icon: {
        description: "Available types for `Button` components you can see bellow, but for 'Button With Icon' variant available just 2 two types of the icon: `arrow-bracket-left`, `arrow-bracket-right`",
        defaultValue: "arrow-bracket-left",
        options: iconConfig.iconNames.filter(icon => icon.includes("arrow-bracket")),
        control: {type: "select"}
    }
}
with_icon.parameters = {
    docs: {
        storyDescription: buttonWithIconDesc
    }
}

export const Toggle = Template.bind({});
Toggle.argTypes = {
    label: {
        table: {disable: true}
    }
}
Toggle.args = {
    label: "",
    outline: true,
    small: true,
    toggle: true,
    icon: "plus",
    iconPosition: "left"
}
Toggle.parameters = {
    docs: {
        storyDescription: buttonToggleDesc
    }
}
