import React from "react";
import {Meta, Story} from '@storybook/react';
import {SubscribeForm, SubscribeFormProps} from "./SubscribeForm";
import data from "./SubscribeForm.stories.json";

export default {
    title: "molecules/forms/Subscribe Form",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: SubscribeForm,
    argTypes: {
        title: {
            defaultValue: data.title,
            control: {type: "text"}
        },
        submitLabel: {
            defaultValue: data.submitLabel,
            control: {type: "text"}
        },
        cancelLabel: {
            defaultValue: data.cancelLabel,
            control: {type: "text"}
        }
    }
} as Meta;

const Template: Story<SubscribeFormProps> = (args) => <SubscribeForm {...args}/>;

export const Basic = Template.bind({});
