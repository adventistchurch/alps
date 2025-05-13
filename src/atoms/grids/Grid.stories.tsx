import type { Meta, StoryObj } from '@storybook/react';
import { Grid, GridProps, wrapSizes } from './Grid';
import { GridItem } from './GridItem';
import { ComponentsTypes } from '../../global/commons';

const meta: Meta<typeof Grid> = {
  title: 'atoms/Grid',
  component: Grid,
  tags: [ 'autodocs' ],
  parameters: {
    componentSubtitle: `${ComponentsTypes.COMPONENT}${ComponentsTypes.CAN_BE_USE_AS_WRAPPER}`,
    status: 'released',
  },
  argTypes: {
    as: {
      options: [ 'article', 'div', 'section' ],
      control: { type: 'select' },
    },
    wrap: {
      name: 'Wrap (x of 7)',
      options: wrapSizes,
      control: { type: 'select' },
    },
    noGutters: {
      name: 'No Gutters',
      control: { type: 'boolean' },
    },
    seven: {
      name: 'Seven',
      control: { type: 'boolean' },
    },
    blockRow: {
      control: { type: 'boolean' },
    },
    noWrapClass: {
      control: { type: 'boolean' },
    },
    sevenInner: {
      control: { type: 'boolean' },
    },
  },
  args: {
    as: 'div',
    noGutters: false,
    seven: false,
    blockRow: false,
    noWrapClass: false,
    sevenInner: false,
  },
};

export default meta;

type Story = StoryObj<typeof Grid>;

export const Basic: Story = {
  render: (args: GridProps) => (
    <Grid {...args}>
      {Array.from({ length: 7 }).map((_, i) => (
        <GridItem key={i} sizeAtS="3" sizeAtXL="2">
          Test_{i + 1}
        </GridItem>
      ))}
    </Grid>
  ),
};
