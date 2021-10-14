import React from "react";
import {Grid} from "./Grid";

export interface GridSevenProps {
    children?: React.ReactNode,
    inner?: boolean,
    className?: string,
    onClick?: () => void
}

export const GridSeven = ({children, inner, className, onClick}: GridSevenProps): JSX.Element => {
    return (
        <Grid className={className} seven sevenInner={inner}>
            {children}
        </Grid>
    )
}
