import React from 'react';

export interface TableProps {
    title?: string,
    columns?: string[],
    rows?: [],
    withBorder?: boolean,
    slim?: boolean
}

/**
 *```tsx
 <Table
    title={"Title of the Table"}
    columns={columns}
    rows={rows}
 />
 ```
 ## JSON ITEMS
 ```json
 {
    "columns": [
      "Heading 1",
      "Heading 2",
      "Heading 3",
      "Heading 4",
      "Heading 5"
    ],
}
 ```

 ```json
 {
    "rows": [
      ["Cell 1", "Cell 2", "Cell 3", "Cell 4", "Cell 5"],
      ["Cell 1", "Cell 2", "Cell 3", "Cell 4", "Cell 5"],
      ["Cell 1", "Cell 2", "Cell 3", "Cell 4", "Cell 5"],
      ["Cell 1", "Cell 2", "Cell 3", "Cell 4", "Cell 5"],
      ["Cell 1", "Cell 2", "Cell 3", "Cell 4", "Cell 5"],
      ["Cell 1", "Cell 2", "Cell 3", "Cell 4", "Cell 5"],
      ["Cell 1", "Cell 2", "Cell 3", "Cell 4", "Cell 5"]
    ]
}
 ```
 */
export const Table = ({title, columns = [], rows = [], withBorder = false, slim = false}: TableProps): JSX.Element => {

    let classes = "u-spacing ";

    if (withBorder && slim) {
        classes = classes + "u-border o-table-slim";
    } else if (withBorder) {
        classes = classes + "u-border";
    } else if (slim) {
        classes = classes + "o-table-slim";
    }

    return (
        <table className={classes}>
            {title && <caption>{title}</caption>}
            <thead>
            <tr>
                {
                    columns.map((header, col) => (
                        <th tabIndex={0} scope="col" title={title} key={`column-${col}`}>
                            {header}
                        </th>
                    ))
                }
            </tr>
            </thead>
            <tbody>
            {rows.map((cells, row) => (
                <tr tabIndex={0} key={`row-${row}`}>
                    {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        cells.map((content, cell) => (
                            <td tabIndex={0} key={`row-${row}-${cell}`}>
                                {content}
                            </td>
                        ))
                    }
                </tr>
            ))}
            </tbody>
        </table>
    )
}
