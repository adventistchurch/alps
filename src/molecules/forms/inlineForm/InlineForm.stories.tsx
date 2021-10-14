import React from "react";
import {Meta, Story} from '@storybook/react'
import data from "./InlineForm.stories.json";
import {InlineForm, InlineFormProps} from "./InlineForm";

export default {
    title: "molecules/forms/Inline Form",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: InlineForm,
    argTypes: {
        submitLabel: {
            defaultValue: data.submitLabel,
            control: {type: "text"}
        }
    }
} as Meta;

const Template: Story<InlineFormProps> = (args) => <InlineForm {...args}/>;

export const Basic = Template.bind({});
