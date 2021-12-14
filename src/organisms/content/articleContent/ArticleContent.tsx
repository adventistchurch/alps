import React from "react";

import {spacingSizesMap} from "../../../global/spacing";
import {GridItem} from "../../../atoms/grids/GridItem";
import {Text} from "../../../atoms/text/Text";

export interface ArticleContentProps {
    children?: React.ReactNode,
    sidebar?: React.ReactNode,
    /**
     * Specify whether the ArticleContent should be a hasDropcap variant
     */
    hasDropcap?: boolean,
    /**
     * Specify the type of your  spacing
     */
    spacing?: keyof typeof spacingSizesMap
}

export const ArticleContent = ({
                                   children,
                                   sidebar,
                                   hasDropcap = true,
                                   spacing = "double"
                               }: ArticleContentProps): JSX.Element => {
    return (
        <section
            className={"u-padding--zero--sides u-spacing--double--until-large l-grid l-grid--7-col l-grid-wrap--6-of-7 u-shift--left--1-col--at-large"}>
            <GridItem className="c-article" sizeAtL="3" sizeAtXL="3">
                <Text
                    as="article"
                    className="c-article__body"
                    hasDropcap={hasDropcap}
                    spacing={spacing}
                >
                {children}
                </Text>
            </GridItem>

            {sidebar && (
                <div
                    className="c-sidebar u-padding--zero--sides l-grid-item l-grid-item--l--2-col l-grid-item--xl--2-col">
                    {sidebar}
                </div>
            )}
        </section>
    )
}
