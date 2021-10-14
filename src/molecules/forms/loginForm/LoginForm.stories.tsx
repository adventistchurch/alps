import React from "react";
import {Meta, Story} from '@storybook/react'
import data from "./LoginForm.stories.json";
import {LoginForm, LoginFormProps} from "./LoginForm";

export default {
    title: "molecules/forms/Login Form",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: LoginForm,
    argTypes: {
        title: {
            defaultValue: data.title,
            control: {type: "text"}
        },
        submitLabel: {
            defaultValue: data.submitLabel,
            control: {type: "text"}
        },
        usernameLabel: {
            defaultValue: data.usernameLabel,
            control: {type: "text"}
        },
        passwordLabel: {
            defaultValue: data.passwordLabel,
            control: {type: "text"}
        },
        forgotPwdLabel: {
            defaultValue: data.forgotPwdLabel,
            control: {type: "text"}
        },
        forgotPwdUrl: {
            defaultValue: data.forgotPwdUrl,
            control: {type: "text"}
        },
        formSubmitted: {
            name: "Form submitted",
            defaultValue: false,
            control: {type: "boolean"}
        }
    }
} as Meta;

const Template: Story<LoginFormProps> = (args) => {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return <LoginForm submitMessage={args.formSubmitted ? data.submitMessage : null} {...args}/>
};

export const Basic = Template.bind({});
