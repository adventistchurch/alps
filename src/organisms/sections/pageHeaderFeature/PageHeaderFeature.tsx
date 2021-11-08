import React from "react";
import useClasses from "../../../helpers/useClasses";
import renderItems from "../../../helpers/renderItems";
import {MediaBlock} from "../../../molecules/blocks/mediaBlock/MediaBlock";

export const blockTypes = {
    "feature": "feature",
    "featureHalf": "featureHalf",
    "featureWide": "featureWide",
    "column": "column",
    "full": "full",
    "longform": "longform"
}

export interface PageHeaderFeatureProps {
    blocks?: [],
    blockType?: keyof typeof blockTypes,
    hasScroll?: boolean
}

export const PageHeaderFeature = ({
                                      blocks,
                                      blockType = "feature",
                                      hasScroll = false
                                  }: PageHeaderFeatureProps): JSX.Element => {
    const headerClasses = useClasses("c-page-header c-page-header__feature", {
        "c-page-header__3-col": blockType === "column",
        "has-scroll": hasScroll,
    })

    return (
        <header className={headerClasses}>
            <div className="c-page-header__content">
                {blocks ? (
                    renderItems(blocks, MediaBlock, {type: blockType})
                ) : (
                    <MediaBlock
                        type={blockType}
                        asBackgroundImage
                    />
                )}
            </div>
            {hasScroll && <a href="#top" className="c-page-header__scroll"/>}
        </header>
    )
}
