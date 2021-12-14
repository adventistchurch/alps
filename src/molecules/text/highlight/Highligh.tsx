import React from 'react';

export interface HighlightProps {
    children?: React.ReactNode,
    /**
     * Specify the value of your Highlight
     */
    value?: string,
}

export const Highlight = ({children, value}: HighlightProps):JSX.Element => {
    return (
        <p className={"o-highlight u-background-color--gray--light can-be--dark-dark u-padding"}>
            {value}
            {children}
        </p>
    )
}