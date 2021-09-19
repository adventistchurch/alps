import React from 'react';
import {ImageType} from "./ImageType";
import {Image} from "./Image";

export interface PictureProps {
    lazy?: boolean,
    image: ImageType
}

export const Picture = ({
                            lazy = false,
                            image = {
                                srcSet: {
                                    default: "",
                                    500: "",
                                    750: "",
                                    1200: ""
                                }, alt: ''
                            }
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
                        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
                        // @ts-ignore
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
