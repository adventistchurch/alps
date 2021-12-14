import React, {useMemo} from "react"
import {Video} from "../../../atoms/video/Video";
import {Figcaption} from "../figcaption/Figcaption";
import {Picture} from "../../../atoms/images/Picture";
import {figureAlignPositionsMap, figureSizesMap, getFigureClasses} from "../../../global/figures";
import {ImageType} from "../../../atoms/images/ImageType";

export interface FigureProps {
    /**
     * Specify the caption of your  Figure
     */
    caption?: string,
    /**
     * Specify the align of your  Figure
     */
    align?: keyof typeof figureAlignPositionsMap,
    /**
     * Specify the className of your  Figure
     */
    className?: string,
    image?: ImageType,
    /**
     * Specify whether the Figure should be an lazy variant
     */
    lazy?: boolean,
    /**
     * Specify the size of your  Figure
     */
    size?: keyof typeof figureSizesMap,
    /**
     * Specify the videoSrc of your  Figure
     */
    videoSrc?: string
}

export const Figure = ({
                           caption,
                           className = "",
                           image,
                           lazy = false,
                           videoSrc,
                           align = "left",
                           size = "medium"
                       }: FigureProps): JSX.Element => {
    const classes = useMemo(() => getFigureClasses(align, size), [align, size])

    return (
        <figure className={`o-figure ${classes} ${className}`}>
            {image && (
                <div className="o-figure__image">
                    <Picture image={image} lazy={lazy}/>
                </div>
            )}
            {videoSrc && (
                <div className="u-image--wrap">
                    <Video src={videoSrc}/>
                </div>
            )}
            {caption && (
                <div className="o-figure__caption">
                    <Figcaption>{caption}</Figcaption>
                </div>
            )}
        </figure>
    )
}
