import React from 'react';
import {ImageType} from "./ImageType";
import {Image} from "./Image";

export interface PictureProps {
    lazy?: boolean,
    image: ImageType
}

export const Picture = ({
                            lazy = false,
                            image = {srcSet: {}, alt: ''}
                        }: PictureProps): JSX.Element | null => {
    if (!image || !image.srcSet) return null;

    const {alt, srcSet} = image;

    const {default: defaultImage, placeholder, ...otherImages} = srcSet;

    return (
        <picture className={"picture"}>
            {Object.keys(otherImages)
                .reverse()
                .map((size, i) => (
                    <source
                        key={i}
                        media={`(min-width: ${size}px)`}
                        srcSet={otherImages[size]}
                    />
                ))}
            <Image
                alt={alt}
                lazy={lazy}
                src={defaultImage}
                placeholderSrc={placeholder}
            />
        </picture>
    )
}
