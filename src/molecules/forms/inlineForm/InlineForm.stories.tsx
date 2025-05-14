import { Meta, StoryObj } from '@storybook/react';
import data from "./InlineForm.stories.json";
import { InlineForm } from "./InlineForm";

const meta = {
  title: "molecules/forms/Inline Form",
  component: InlineForm,
  tags: [ 'autodocs' ],
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
  },
  argTypes: {},
} satisfies Meta<typeof InlineForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    submitLabel: data.submitLabel,
  },
};
