import type { Meta, StoryObj } from '@storybook/react';
import { Picture } from './Picture';
import data from './Picture.stories.json';

const meta = {
  title: 'atoms/images/Picture',
  component: Picture,
  tags: [ 'autodocs' ],
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
  },
  argTypes: {
    image: {
      control: { type: 'object' },
    },
    lazy: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Picture>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Landscape: Story = {
  args: {
    image: {
      srcSet: data.Landscape,
      alt: data.alt,
    },
    lazy: false,
  },
};

export const Portrait: Story = {
  args: {
    image: {
      srcSet: data.Portrait,
      alt: data.alt,
    },
    lazy: false,
  },
};

export const Square: Story = {
  args: {
    image: {
      srcSet: data.Square,
      alt: data.alt,
    },
    lazy: false,
  },
};
