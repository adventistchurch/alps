import { Video } from './Video';
import { videoConfig } from './_config';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'atoms/Video',
  component: Video,
  tags: [ 'autodocs' ],
  argTypes: {
    src: {
      name: 'Source',
      control: { type: 'text' },
    },
    width: {
      name: 'Width',
      control: { type: 'number' },
    },
    height: {
      name: 'Height',
      control: { type: 'number' },
    },
  },
  args: {
    src: videoConfig.data.src,
    width: videoConfig.data.width,
    height: videoConfig.data.height,
  },
} satisfies Meta<typeof Video>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
