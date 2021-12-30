import React from "react";
import {Grid} from "./Grid";

export interface GridSevenProps {
    children?: React.ReactNode,
    inner?: boolean,
    className?: string,
    onClick?: () => void,
    id?: string,
    as?: "article" | "div" | "section"
}

export const GridSeven = ({children, inner, className, id, as}: GridSevenProps): JSX.Element => {
    return (
        <Grid id={id} as={as} className={className} seven sevenInner={inner}>
            {children}
        </Grid>
    )
}
