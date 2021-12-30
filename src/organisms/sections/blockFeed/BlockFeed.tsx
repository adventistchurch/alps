import React from "react";
import {GridItem, GridItemProps} from "../../../atoms/grids/GridItem";
import {MediaBlock, MediaBlockProps, MediaBlockTypesMap} from "../../../molecules/blocks/mediaBlock/MediaBlock";
import {GridSeven} from "../../../atoms/grids/GridSeven";
import renderItems from "../../../helpers/renderItems";

export interface BlockFeedProps {
    /**
     * Items for rendering MediaBlock components
     */
    blocks?: [],
    /**
     * Specify the type of your blocksType
     */
    blocksType?: keyof typeof MediaBlockTypesMap,
    /**
     * Specify whether the BlockFeed should be a grid variant
     */
    grid?: boolean,
    gridItemProps?: GridItemProps,
    /**
     * Specify whether the BlockFeed should be a gridNoWrap variant
     */
    gridNoWrap?: boolean,
}

export const BlockFeed = ({
                              blocks = [],
                              blocksType = "row",
                              grid = false,
                              gridItemProps = {sizeAtS: "3", sizeAtXL: "2"}
                          }: BlockFeedProps): JSX.Element => {
    const itemsProps = {
        type: blocksType,
    }

    return (
        <section className="c-section c-section__block-feed u-spacing--double">
            {grid ? (
                <GridSeven className={"l-grid l-grid--7-col u-no-gutters l-grid-wrap"}>
                    {renderItems(blocks, (block: JSX.IntrinsicAttributes & MediaBlockProps) => (
                        <GridItem {...gridItemProps}>
                            <MediaBlock {...itemsProps} {...block} />
                        </GridItem>
                    ), "")}
                </GridSeven>
            ) : (
                renderItems(blocks, MediaBlock, itemsProps)
            )}
        </section>
    )
}
