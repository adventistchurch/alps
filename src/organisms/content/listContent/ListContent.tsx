import React from "react";
import {Pagination} from "../../../molecules/navigation/pagination/Pagination";
import {HeadingBlock} from "../../../molecules/blocks/headingBlock/HeadingBlock";

export interface ListContentProps {
    children?: React.ReactNode,
    /**
     * Specify the contentSpacing of your ListContent
     */
    contentSpacing?: string,
    /**
     * Specify the linkLabel of your ListContent
     */
    linkLabel?: string,
    /**
     * Specify the linkUrl of your ListContent
     */
    linkUrl?: string,
    pagination?: any,
    /**
     * Specify the title of your ListContent
     */
    title?: string
}

export const ListContent = ({
                                children,
                                contentSpacing = "double",
                                pagination,
                                title,
                                linkUrl = "#",
                                linkLabel = "See all"
                            }: ListContentProps): JSX.Element => {
    return (
        <div className="c-block-wrap u-spacing">
            {title && (
                <HeadingBlock title={title} linkText={linkLabel} url={linkUrl}/>
            )}
            <div className={`c-block-wrap__content u-spacing--${contentSpacing}`}>
                {children}
            </div>
            {pagination && <Pagination {...pagination} />}
        </div>
    )
}
