import React from 'react';

export interface BylineProps {
    children?: React.ReactNode,
    value?: string,
}

export const Byline = ({children, value}: BylineProps):JSX.Element => {
    return (
        <div className={"byline can-be--white u-color--gray u-font--secondary--s"}>
            {value}
            {children}
        </div>
    )
}
