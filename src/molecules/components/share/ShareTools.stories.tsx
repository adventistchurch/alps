import { Meta, StoryObj } from '@storybook/react';
import { ShareTools } from './ShareTools';

const meta = {
  title: 'molecules/components/ShareTools',
  component: ShareTools,
  tags: [ 'autodocs' ],
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
  },
} satisfies Meta<typeof ShareTools>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
