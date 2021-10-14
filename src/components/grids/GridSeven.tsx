import React from "react";
import {Grid} from "./Grid";

export interface GridSevenProps {
    children?: React.ReactNode,
    inner?: boolean
}

export const GridSeven = ({children, inner, ...props}: GridSevenProps): JSX.Element => {
    return (
        <Grid {...props} seven sevenInner={inner}>
            {children}
        </Grid>
    )
}
