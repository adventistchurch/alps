import type { Meta, StoryObj } from '@storybook/react';
import { Dropcap } from './Dropcap';
import { ComponentsTypes } from '../../global/commons';

const meta = {
  title: 'atoms/Texts/Dropcap',
  component: Dropcap,
  tags: [ 'autodocs' ],
  parameters: {
    componentSubtitle: ComponentsTypes.COMPONENT,
  },
  argTypes: {},
} satisfies Meta<typeof Dropcap>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    letter: 'S',
  },
};
