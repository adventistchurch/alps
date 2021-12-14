import React from "react";
import {HeadingBlock} from "../../../molecules/blocks/headingBlock/HeadingBlock";
import renderItems from "../../../helpers/renderItems";
import {MediaBlock} from "../../../molecules/blocks/mediaBlock/MediaBlock";

export interface RelatedPostsProps {
    blocks?: [],
    /**
     * Specify the heading of your RelatedPosts
     */
    heading?: string,
    /**
     * Specify the linkText of your RelatedPosts
     */
    linkText?: string,
    /**
     * Specify the url of your RelatedPosts
     */
    url?: string
}

export const RelatedPosts = ({blocks = [], heading = "Heading", linkText, url}: RelatedPostsProps): JSX.Element => {
    return (
        <div className="c-related-posts u-spacing">
            <HeadingBlock title={heading} linkText={linkText} url={url}/>
            <div className="c-related-posts__content u-spacing">
                {renderItems(blocks, MediaBlock, {type: "relatedPost"})}
            </div>
        </div>
    )
}
