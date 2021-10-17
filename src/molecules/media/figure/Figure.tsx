import React, {useMemo} from "react"
import {Video} from "../../../components/video/Video";
import {Figcaption} from "../figcaption/Figcaption";
import {Picture} from "../../../components/images/Picture";
import {figureAlignPositionsMap, figureSizesMap, getFigureClasses} from "../../../global/figures";
import {ImageType} from "../../../components/images/ImageType";

export interface FigureProps {
    caption?: string,
    align?: keyof typeof figureAlignPositionsMap,
    className?: string,
    image?: ImageType,
    lazy?: boolean,
    size?: keyof typeof figureSizesMap,
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
