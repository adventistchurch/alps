import type { Meta, StoryObj } from '@storybook/react';
import { Image, ImageProps } from './Image';

const defaultImages = {
  Landscape: '//picsum.photos/800/600',
  Portrait: '//picsum.photos/600/800',
  Square: '//picsum.photos/500/500',
};

const meta: Meta<typeof Image> = {
  title: 'atoms/images/Image',
  component: Image,
  tags: [ 'autodocs' ],
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
  },
  argTypes: {
    src: {
      control: { type: 'object' },
    },
    alt: {
      control: { type: 'text' },
    },
    lazy: {
      control: { type: 'boolean' },
    },
    className: {
      control: { type: 'text' },
    },
    mode: {
      name: 'Mode',
      control: { type: 'text' },
    },
  },
  args: {
    src: defaultImages.Landscape,
    alt: 'Just a placeholder image',
    lazy: false,
    className: 'story-block__image',
    mode: 'Landscape ' + defaultImages.Landscape,
  },
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Landscape: Story = {
  render: (args: ImageProps) => <Image {...args} />,
};

export const Portrait: Story = {
  args: {
    src: defaultImages.Portrait,
    mode: 'Portrait ' + defaultImages.Portrait,
  },
};

export const Square: Story = {
  args: {
    src: defaultImages.Square,
    mode: 'Square ' + defaultImages.Square,
  },
};
