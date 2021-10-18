import React from "react";
import renderItems from "../../../helpers/renderItems";
import {ContentBlock} from "../../../molecules/blocks/contentBlock/ContentBlock";
import {MediaBlock} from "../../../molecules/blocks/mediaBlock/MediaBlock";
import {HeadingBlock} from "../../../molecules/blocks/headingBlock/HeadingBlock";

export interface BlockWrapProps {
    items?: any[],
    title?: string,
    linkLabel?: string,
    linkUrl?: string,
    type?: "mediaBlock" | "contentBlock"
}

export const BlockWrap = ({
                              items = [],
                              title,
                              linkLabel,
                              linkUrl,
                              type = "mediaBlock"
                          }: BlockWrapProps): JSX.Element => {
    const blockProps = type === "mediaBlock" ? {type: "stacked"} : {}

    return (
        <div className="c-block-wrap u-spacing">
            {title && (
                <HeadingBlock title={title} linkText={linkLabel} url={linkUrl}/>
            )}
            <div className="c-block-wrap__content u-spacing">
                {renderItems(
                    items,
                    type == "contentBlock" ? ContentBlock : MediaBlock,
                    blockProps
                )}
            </div>
        </div>
    )
}
