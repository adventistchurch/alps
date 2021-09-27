import React from 'react'

import {ImageType} from "../../../components/images/ImageType";
import useResponsiveStyles from "../../../helpers/useResponsiveStyles";
import {InlineStyles} from "../../../helpers/InlineStyles";
import {Picture} from "../../../components/images/Picture";
import useClasses from "../../../helpers/useClasses";

export interface MediaImageProps {
    asBackgroundImage?: boolean,
    className?: string,
    caption?: string,
    icon?: string,
    image: ImageType,
    type?: "audio" | "gallery" | "video",
    url?: string
}

export const MediaImage = ({
                               asBackgroundImage = false,
                               caption,
                               className,
                               icon = "",
                               image,
                               type,
                               url = "",
                               ...otherProps
                           }: MediaImageProps): JSX.Element => {
    const bgImageStyles = useResponsiveStyles(
        (url: string) => `.o-background-image {
      background-image: url('${url}');
    }`,
        image.srcSet
    )

    const classNames = useClasses(
        'c-block__image',
        {
            [`c-block__icon c-block__icon--${icon}`]: icon,
            ['o-background-image u-background--cover']: asBackgroundImage,
        },
        className
    )

    return (
        <div {...otherProps} className={classNames}>
            {asBackgroundImage && bgImageStyles && (
                <InlineStyles styles={bgImageStyles}/>
            )}
            <div className="c-block__image-outer-wrap">
                <div className="c-block__image-wrap">
                    <a href={url} title={image.caption || image.alt}>
                        <div style={asBackgroundImage ? {visibility: 'hidden'} : {}}>
                            <Picture image={image}/>
                        </div>
                    </a>

                    {(caption || image.caption) && (
                        <div
                            className={`c-block__caption u-color--white-transparent u-padding--top u-padding--bottom 
                            ${type ? "u-padding--quad" : ""}
                            ${"u-padding--right--" + type}
                            ${"u-padding--left--" + type}
                            u-padding--sides`}
                        >
                            {caption || image.caption}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
