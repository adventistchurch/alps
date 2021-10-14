import React from 'react';
import {getGridItemClass} from "../../global/grids";

interface GridItemProps {
    children?: React.ReactNode,
    noItemClass?: boolean,
    size?: string,
    sizeAtL?: string,
    sizeAtM?: string,
    sizeAtS?: string,
    sizeAtXL?: string,
}

export const GridItem = ({
                             children,
                             noItemClass = false,
                             size,
                             sizeAtL,
                             sizeAtM,
                             sizeAtS,
                             sizeAtXL,
                             ...props
                         }: GridItemProps): JSX.Element => {

    const classes = getGridItemClass({
        noItemClass,
        size,
        sizeAtL,
        sizeAtM,
        sizeAtS,
        sizeAtXL
    }).toString().replaceAll(",", " ");

    return (
        <div className={classes} {...props}>
            {children}
        </div>
    )
}
