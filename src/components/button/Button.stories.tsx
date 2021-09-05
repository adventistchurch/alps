import React from 'react';
import {Meta, Story} from '@storybook/react'

import {Button, ButtonProps} from './Button';
import {buttonConfig} from "./_config";
import {iconConfig} from "../icons/_config";

export default {
    title: "components/Button",
    component: Button,
    argTypes: {
        label: {
            name: "Text",
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
        },
        iconFill: {
            name: "Fill",
            defaultValue: "white",
            options: iconConfig.fill.default,
            control: {type: "select"}
        }
    }
} as Meta;

const Template: Story<ButtonProps> = (args) =>
    <Button {...args} />

export const Basic = Template.bind({});
Basic.argTypes = {
    disabled: {name: "Disable", defaultValue: false, control: {type: "boolean"}},
    expand: {name: "Expand", defaultValue: false, control: {type: "boolean"}},
    lighter: {name: "Lighter", defaultValue: false, control: {type: "boolean"}},
    outline: {name: "Outline", defaultValue: false, control: {type: "boolean"}},
    simple: {name: "Simple", defaultValue: false, control: {type: "boolean"}},
    small: {name: "Small", defaultValue: false, control: {type: "boolean"}},
    toggle: {name: "Toggle", defaultValue: false, control: {type: "boolean"}}
}

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true
}

export const Lighter = Template.bind({});
Lighter.args = {
    lighter: true
}

export const Outline = Template.bind({});
Outline.args = {
    outline: true
}

export const Simple = Template.bind({});
Simple.args = {
    simple: true
}

export const Small = Template.bind({});
Small.args = {
    small: true
}

export const with_icon_left = Template.bind({});
with_icon_left.args = {
    icon: "arrow-bracket-left"
}
export const with_icon_right = Template.bind({});
with_icon_right.args = {
    icon: "arrow-bracket-right"
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
