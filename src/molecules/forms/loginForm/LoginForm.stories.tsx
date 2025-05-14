import { Meta, StoryObj } from '@storybook/react';
import data from "./LoginForm.stories.json";
import { LoginForm } from "./LoginForm";

const meta = {
  title: "molecules/forms/Login Form",
  component: LoginForm,
  tags: [ 'autodocs' ],
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
  },
  argTypes: {
    title: {
      control: { type: "text" }
    },
    submitLabel: {
      control: { type: "text" }
    },
    usernameLabel: {
      control: { type: "text" }
    },
    passwordLabel: {
      control: { type: "text" }
    },
    forgotPwdLabel: {
      control: { type: "text" }
    },
    forgotPwdUrl: {
      control: { type: "text" }
    },
    // @ts-ignore
    formSubmitted: {
      name: "Form submitted",
      control: { type: "boolean" }
    },
  },
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: data.title,
    submitLabel: data.submitLabel,
    usernameLabel: data.usernameLabel,
    passwordLabel: data.passwordLabel,
    forgotPwdLabel: data.forgotPwdLabel,
    forgotPwdUrl: data.forgotPwdUrl,
    // @ts-expect-error - not part of props, just used in render
    formSubmitted: false,
  },
  render: (args) => {
    // @ts-expect-error formSubmitted is not part of LoginFormProps
    const { formSubmitted, ...rest } = args;

    return (
      <LoginForm
        {...rest}
        // @ts-ignore
        submitMessage={formSubmitted ? data.submitMessage : null}
      />
    );
  },
};

