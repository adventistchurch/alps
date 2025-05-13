import type { Meta, StoryObj } from '@storybook/react';
import { FooterSecondaryNavigation } from './FooterSecondaryNavigation';
import data from './FooterSecondaryNavigation.stories.json';

const meta: Meta<typeof FooterSecondaryNavigation> = {
  title: 'molecules/navigation/Footer Secondary Navigation',
  component: FooterSecondaryNavigation,
  tags: [ 'autodocs' ],
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof FooterSecondaryNavigation>;

export const Basic: Story = {
  args: {
    items: data.items,
  },
};
