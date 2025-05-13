import type { Meta, StoryObj } from '@storybook/react';
import { IconWrap, IconWrapProps } from './IconWrap';
import { iconConfig } from './_config';
import { grayscaleColors, themeColors } from '../../global/colors';

const meta: Meta<typeof IconWrap> = {
  title: 'atoms/Icon Wrap',
  component: IconWrap,
  tags: [ 'autodocs' ],
  argTypes: {
    name: {
      name: 'Icon Name',
      options: [ '' ].concat(iconConfig.iconNames),
      control: { type: 'select' },
    },
    color: {
      name: 'Color',
      options: [ '' ].concat(grayscaleColors, themeColors),
      control: { type: 'select' },
    },
    background: {
      name: 'Background',
      options: [ '' ].concat(themeColors),
      control: { type: 'select' },
    },
    size: {
      name: 'Size',
      options: iconConfig.iconSizes.available,
      control: { type: 'inline-radio' },
    },
    iconPosition: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
    as: {
      table: { disable: true },
    },
  },
  args: {
    name: 'logo',
    size: 'xl',
  },
};

export default meta;

type Story = StoryObj<typeof IconWrap>;

export const Default: Story = {
  render: (args: IconWrapProps) => <IconWrap {...args} />,
};
