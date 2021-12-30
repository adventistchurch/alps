import React from "react";

import {getGridClass, wrapSizes} from "../../global/grids";

export interface GridProps {
    /**
     * Wrap block in tag
     */
    as?: "article" | "div" | "section",
    /**
     * Set `l-section__block-row l-section__block-row--6-col` class
     */
    blockRow?: boolean,
    children?: React.ReactNode,
    /**
     * Set `noWrapClass` class
     */
    noWrapClass?: boolean,
    /**
     * Remove gutters (left padding) in columns content. `Seven` property need to be available
     */
    noGutters?: boolean,
    /**
     * Wrap blocks `x of 7`. `Seven` property need to be available
     */
    wrap?: string,
    /**
     * Enable vertical layout of columns
     */
    seven?: boolean,
    /**
     * Set `l-grid--7-col--inner` class. `Seven` property need to be available
     */
    sevenInner?: boolean,
    /**
     * Set className from available global css for this library.
     * You can see this information in Documentation Section
     */
    className?: string,
    id?: string
}

export const Grid = ({
                         as = "div",
                         blockRow = false,
                         children,
                         noWrapClass,
                         noGutters = false,
                         seven = false,
                         sevenInner = false,
                         wrap = "1",
                         id,
                         ...props
                     }: GridProps): JSX.Element => {

    const classes = getGridClass({noGridClass: false, noGutters, noWrapClass, blockRow, seven, sevenInner, wrap})
        .toString().replaceAll(",", " ");

    let elementByType: JSX.Element;

    switch (as) {
        case "article":
            elementByType =
                <article id={id ? id : ""} className={classes}{...props}>
                    {children}
                </article>

            break;
        case "section":
            elementByType =
                <section id={id ? id : ""} className={classes} {...props}>
                    {children}
                </section>
            break;
        default:
            elementByType =
                <div id={id ? id : ""} className={classes} {...props}>
                    {children}
                </div>
            break;
    }

    return (elementByType);
}

export {wrapSizes}
