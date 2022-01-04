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
    /**
     * Specify the type of your  blockType
     */
    blockType?: keyof typeof blockTypes,
    /**
     * Specify whether the PageHeader should be a hasScroll variant
     */
    hasScroll?: boolean,
    /**
     * Specify this parameter for Media Block includes in this component
     */
    asBackgroundImage?: boolean
}

export const PageHeaderFeature = ({
                                      blocks,
                                      blockType = "feature",
                                      hasScroll = false,
                                      asBackgroundImage
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
                        asBackgroundImage={asBackgroundImage}
                    />
                )}
            </div>
            {hasScroll && <a href="#" className="c-page-header__scroll"/>}
        </header>
    )
}
