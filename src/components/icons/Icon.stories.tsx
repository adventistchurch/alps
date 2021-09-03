import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Icon} from './Icon';
import {IconProps} from "./library/IconProps";
import library from "./library";

export default {
    title: "components/Icon",
    component: Icon
} as Meta;

const iconNames = Array.from(library.keys());

const Template: Story<IconProps> = (args) =>
    <div style={{height: "500px", width: "500px"}}>
        <Icon name={"logo"} {...args} />
    </div>;

//Add controls for not single Icon Story
export const DefaultIcon = Template.bind({});
DefaultIcon.argTypes = {
    name: {
        name: "Icon name",
        options: iconNames,
        control: {type: 'select'}
    }
};

export const arrow_brackets = Template.bind({});
arrow_brackets.argTypes = {
    name: {
        name: "Icon name",
        defaultValue: "arrow-bracket-left",
        options: iconNames.filter(icon => icon.includes("arrow-bracket")),
        control: {type: 'select'}
    }
};

export const arrow_long = Template.bind({});
arrow_long.argTypes = {
    name: {
        name: "Icon name",
        defaultValue: "arrow-long-left",
        options: iconNames.filter(icon => icon.includes("arrow-long")),
        control: {type: 'select'}
    }
};

export const arrow_short = Template.bind({});
arrow_short.argTypes = {
    name: {
        name: "Icon name",
        defaultValue: "arrow-short-left",
        options: iconNames.filter(icon => icon.includes("arrow-short")),
        control: {type: 'select'}
    }
};

export const logo = Template.bind({});
logo.argTypes = {
    name: {
        name: "Icon name",
        defaultValue: "logo",
        options: iconNames.filter(icon => icon.includes("logo")),
        control: {type: 'select'}
    }
};

//Single Icons
const argsTypeForSingleIcon = (name: string) => {
    return {
        name: {
            name: "Icon name",
            defaultValue: name,
            options: [name],
            control: {type: 'text'}
        }
    }
}

export const close = Template.bind({});
close.argTypes = argsTypeForSingleIcon("close");

export const contacts = Template.bind({});
contacts.argTypes = argsTypeForSingleIcon("contacts");

export const dots = Template.bind({});
dots.argTypes = argsTypeForSingleIcon("dots");

export const language = Template.bind({});
language.argTypes = argsTypeForSingleIcon("language");

export const legal = Template.bind({});
legal.argTypes = argsTypeForSingleIcon("legal");

export const menu = Template.bind({});
menu.argTypes = argsTypeForSingleIcon("menu");

export const plus = Template.bind({});
plus.argTypes = argsTypeForSingleIcon("plus");

export const search = Template.bind({});
search.argTypes = argsTypeForSingleIcon("search");

export const settings = Template.bind({});
settings.argTypes = argsTypeForSingleIcon("settings");

export const share = Template.bind({});
share.argTypes = argsTypeForSingleIcon("share");

export const subscribe = Template.bind({});
subscribe.argTypes = argsTypeForSingleIcon("subscribe");
