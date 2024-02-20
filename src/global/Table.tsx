import React from 'react';

// @ts-ignore
const Table = ({ headers, rows }) => (
    <table>
        <thead>
        <tr>
            {headers.map((header: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
                <th key={index}>{header}</th>
            ))}
        </tr>
        </thead>
        <tbody>
        {rows.map((row: any[], rowIndex: React.Key | null | undefined) => (
            <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                ))}
            </tr>
        ))}
        </tbody>
    </table>
);

export default Table;