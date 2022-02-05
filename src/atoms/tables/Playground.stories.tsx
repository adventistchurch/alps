import {Meta, Story} from "@storybook/react";
import React from "react";
import {range} from "../../helpers/range";
import {Table, TableProps} from "./table/Table";

export default {
    title: "atoms/Tables/Playground",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: Table,
    argTypes: {
        columns: {
            table: {disable: true}
        },
        rows: {
            table: {disable: true}
        },
        title: {
            defaultValue: "Title for table",
            control: {type: "text"}
        },
        colCount: {
            name: "colCount",
            defaultValue: 5,
            control: {type: "number"}
        },
        rowCount: {
            name: "rowCount",
            defaultValue: 5,
            control: {type: "number"}
        },
        cellText: {
            name: "cellText",
            defaultValue: "cellText",
            control: {type: "text"}
        },
        slim: {
            control: {type: "boolean"}
        },
    },
} as Meta;

const Template: Story<TableProps> = (args) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const columns = range(1, args.colCount).map(col => `Header ${col}`)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const rows = range(1, args.rowCount).map(row => range(1, args.colCount).map(col => args.cellText || `C:${col} / R:${row}`))

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return <Table columns={columns} rows={rows} {...args} />
}

export const Playground = Template.bind({});
