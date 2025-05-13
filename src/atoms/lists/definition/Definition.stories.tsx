import type { Meta, StoryObj } from '@storybook/react';
import { Definition } from './Definition';
import data from './Definition.stories.json';

const meta = {
  title: 'atoms/Lists/Definition',
  component: Definition,
  tags: [ 'autodocs' ],
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
  },
  argTypes: {
    items: {
      control: { type: 'object' },
    },
  },
} satisfies Meta<typeof Definition>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    items: data.items,
  },
};
