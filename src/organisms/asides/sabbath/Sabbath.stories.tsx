import type { Meta, StoryObj } from '@storybook/react';
import { Sabbath } from './Sabbath';
import data from './Sabbath.stories.json';

const meta = {
  title: 'organisms/aside/Sabbath',
  component: Sabbath,
  tags: [ 'autodocs' ],
  argTypes: {},
} satisfies Meta<typeof Sabbath>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    showLogo: data.showLogo,
  },
};

export const WithBackground: Story = {
  args: {
    backgroundImage: data.backgroundImage,
  },
};
