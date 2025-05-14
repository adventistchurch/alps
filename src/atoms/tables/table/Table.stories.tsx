import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import data from '../Table.stories.json';

const meta = {
  title: 'atoms/Tables/Table',
  component: Table,
  tags: [ 'autodocs' ],
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
  },
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    columns: {
      control: { type: 'object' },
    },
    rows: {
      control: { type: 'object' },
    },
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'Title for table',
    columns: data.table1.columns,
    // @ts-ignore
    rows: data.table1.rows,
  },
};

export const WithBorder: Story = {
  args: {
    title: 'Title for table',
    columns: data.table1.columns,
    // @ts-ignore
    rows: data.table1.rows,
    withBorder: true,
  },
};

export const Slim: Story = {
  args: {
    title: 'Title for table',
    columns: data.table1.columns,
    // @ts-ignore
    rows: data.table1.rows,
    withBorder: true,
    slim: true,
  },
};
