import React from "react";

import {getGridClass, wrapSizes} from "../../global/grids";

export interface GridProps {
    as?: "article" | "div" | "section",
    blockRow?: string,
    children?: React.ReactNode,
    noWrapClass?: boolean,
    noGutters?: boolean,
    wrap?: string,
    seven?: boolean,
    sevenInner?: boolean,
    className?: string
}

export const Grid = ({
                         as = "div",
                         blockRow,
                         children,
                         noWrapClass,
                         noGutters = false,
                         seven = false,
                         sevenInner,
                         wrap,
                         ...props
                     }: GridProps): JSX.Element => {

    const classes = getGridClass({noGridClass: false, noGutters, noWrapClass, blockRow, seven, sevenInner, wrap})
        .toString().replaceAll(",", " ");

    let elementByType: JSX.Element;

    switch (as) {
        case "article":
            elementByType =
                <article className={classes}{...props}>
                    {children}
                </article>

            break;
        case "section":
            elementByType =
                <section className={classes} {...props}>
                    {children}
                </section>
            break;
        default:
            elementByType =
                <div className={classes} {...props}>
                    {children}
                </div>
            break;
    }

    return (elementByType);
}

export {wrapSizes}
