import React from "react";
import {GridItem, GridItemProps} from "../../../components/grids/GridItem";
import {MediaBlock, MediaBlockProps, MediaBlockTypesMap} from "../../../molecules/blocks/mediaBlock/MediaBlock";
import {GridSeven} from "../../../components/grids/GridSeven";
import renderItems from "../../../helpers/renderItems";

export interface BlockFeedProps {
    blocks?: [],
    blocksType?: keyof typeof MediaBlockTypesMap,
    grid?: boolean,
    gridItemProps?: GridItemProps,
    gridNoWrap?: boolean,
}

export const BlockFeed = ({
                              blocks = [],
                              blocksType = "row",
                              grid = false,
                              gridItemProps = {sizeAtS: "3", sizeAtXL: "2"},
                              gridNoWrap,
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
