import type { Meta, StoryObj } from '@storybook/react';
import { Inline } from './Inline';
import data from './Inline.stories.json';

const meta = {
  title: 'atoms/Lists/Inline',
  component: Inline,
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
} satisfies Meta<typeof Inline>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    items: data.items,
  },
};
