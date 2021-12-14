import {Meta, Story} from "@storybook/react";
import data from '../Table.stories.json'
import React from "react";
import {TableSlim, TableSlimProps} from "./TableSlim";

export default {
    title: "atoms/Tables/Table Slim",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: TableSlim,
    argTypes: {
        title: {
            defaultValue: "Title for table",
            control: {type: "text"}
        },
        slim: {
            control: {type: "boolean"}
        },
        columns: {
            defaultValue: data.table1.columns,
            control: {type: "object"}
        },
        rows: {
            defaultValue: data.table1.rows,
            control: {type: "object"}
        },
    },
} as Meta;

const Template: Story<TableSlimProps> = (args) =>
    <TableSlim {...args} />

export const Basic = Template.bind({});

const slimDesc = `
\`\`\`tsx
<TableSlim
    title={"Title of the Table"}
    slim={true}
    columns={columns}
    rows={rows}
/>
\`\`\`
`;

export const Slim = Template.bind({});
Slim.argTypes = {
    slim: {
        table: {disable: true}
    },
    columns: {
        table: {disable: true}
    },
    rows: {
        table: {disable: true}
    }
}
Slim.args = {
    slim: true
}
Slim.parameters = {
    docs: {
        storyDescription: slimDesc
    }
}
