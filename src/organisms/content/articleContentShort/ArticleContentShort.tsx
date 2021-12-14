import React from "react";

import {spacingSizesMap} from "../../../global/spacing";
import {GridItem} from "../../../atoms/grids/GridItem";
import {Text} from "../../../atoms/text/Text";

export interface ArticleContentShortProps {
    children?: React.ReactNode,
    sidebar?: React.ReactNode,
    /**
     * Specify whether the ArticleContentShort should be a hasDropcap variant
     */
    hasDropcap?: boolean,
    /**
     * Specify the type of your  spacing
     */
    spacing?: keyof typeof spacingSizesMap
}

export const ArticleContentShort = ({
                                        children,
                                        sidebar,
                                        hasDropcap = false,
                                        spacing = "double"
                                    }: ArticleContentShortProps): JSX.Element => {
    return (
        <section
            className={"u-spacing--double--until-large l-grid l-grid--7-col l-grid-wrap--6-of-7 u-shift--left--1-col--at-xxlarge"}>
            <GridItem className="c-article" sizeAtL="4" sizeAtXL="3">
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
                <GridItem
                    className="c-sidebar u-padding--zero--sides"
                    sizeAtL="2"
                    sizeAtXL="2"
                >
                    {sidebar}
                </GridItem>
            )}
        </section>
    )
}
