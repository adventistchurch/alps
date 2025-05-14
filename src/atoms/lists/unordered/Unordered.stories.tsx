import type { Meta, StoryObj } from '@storybook/react';
import { Unordered } from './Unordered';
import data from './Unordered.stories.json';

const meta = {
  title: 'atoms/Lists/Unordered',
  component: Unordered,
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
} satisfies Meta<typeof Unordered>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    items: data.items,
  },
};
