import type { Meta, StoryObj } from '@storybook/react';
import { Ordered } from './Ordered';
import data from './Ordered.stories.json';

const meta = {
  title: 'atoms/Lists/Ordered',
  component: Ordered,
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
} satisfies Meta<typeof Ordered>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    items: data.items,
  },
};
