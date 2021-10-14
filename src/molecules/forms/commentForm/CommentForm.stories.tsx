import React from "react";
import {Meta, Story} from '@storybook/react'
import data from "./CommentForm.stories.json";
import {CommentForm, CommentFormProps} from "./CommentForm";

export default {
    title: "molecules/froms/Comment Form",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: CommentForm,
    argTypes: {
        rows: {
            defaultValue: data.numberOfRows,
            control: {type: "number"}
        },
        submitLabel: {
            defaultValue: data.submitLabel,
            control: {type: "text"}
        },
        title: {
            defaultValue: data.title,
            control: {type: "text"}
        }
    }
} as Meta;

const Template: Story<CommentFormProps> = (args) => <CommentForm {...args}/>;

export const Basic = Template.bind({});
