import type { Meta, StoryObj } from '@storybook/react';
import { range } from '../../helpers/range';
import { Table, TableProps } from './table/Table';

type PlaygroundArgs = TableProps & {
  colCount: number;
  rowCount: number;
  cellText: string;
};

const meta = {
  title: 'atoms/Tables/Playground',
  component: Table,
  tags: [ 'autodocs' ],
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
  },
  argTypes: {
    columns: { table: { disable: true } },
    rows: { table: { disable: true } },
    title: {
      control: { type: 'text' },
      defaultValue: 'Title for table',
    },
    // @ts-ignore
    colCount: {
      name: 'Column Count',
      control: { type: 'number' },
      defaultValue: 5,
    },
    rowCount: {
      name: 'Row Count',
      control: { type: 'number' },
      defaultValue: 5,
    },
    cellText: {
      name: 'Cell Text',
      control: { type: 'text' },
      defaultValue: 'cellText',
    },
    slim: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Table>;

export default meta;

export const Playground: StoryObj<PlaygroundArgs> = {
  args: {
    colCount: 5,
    rowCount: 5,
    cellText: 'cellText',
  },
  render: (args) => {
    const { colCount, rowCount, cellText, ...rest } = args;

    const columns = range(1, colCount).map((col) => `Header ${col}`);
    const rows = range(1, rowCount).map(() =>
      range(1, colCount).map(() => cellText)
    );

    // @ts-ignore
    return <Table {...rest} columns={columns} rows={rows}/>;
  },
};
