import { Meta, StoryObj } from '@storybook/react';
import { Slide } from './Slide';
import data from './Slide.stories.json';

const meta = {
  title: 'molecules/components/Slide',
  component: Slide,
  tags: [ 'autodocs' ],
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
  },
  argTypes: {
    image: {
      control: { type: 'object' },
    },
  },
} satisfies Meta<typeof Slide>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    image: data.image,
  },
};

export const with_heading: Story = {
  args: {
    heading: data.heading,
    subtitle: data.subtitle,
    dek: data.dek,
    cta: data.cta,
    url: data.url,
    image: data.image,
    imageIsLazy: data.imageIsLazy,
  },
};
