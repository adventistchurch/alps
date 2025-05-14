import type { Meta, StoryObj } from '@storybook/react';
import { BreakoutBlock } from './BreakoutBlock';
import data from './BreakoutBlock.stories.json';

const meta = {
  title: 'molecules/blocks/Breakout Block',
  component: BreakoutBlock,
  tags: [ 'autodocs' ],
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
  },
  argTypes: {},
} satisfies Meta<typeof BreakoutBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: data.title,
    description: data.description,
    cta: data.cta,
    url: data.url,
  },
};
