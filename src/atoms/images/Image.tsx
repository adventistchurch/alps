import React from 'react';
// import {LazyImage} from 'react-lazy-images';

export interface ImageProps {
    alt?: string,
    lazy?: boolean,
    src: string,
    placeholderSrc?: string,
    className?: string,
    mode?: string
}

export const Image = ({
                          alt,
                          lazy = true,
                          src,
                          placeholderSrc,
                          className,
                          ...others
}: ImageProps): JSX.Element => {

    // return lazy ? (
    //     <LazyImage
    //       alt={alt}
    //       src={src}
    //       placeholder={({ref}) => (
    //           <img alt={alt} src={placeholderSrc} ref={ref} className={className} {...others}/>
    //       )}
    //       actual={({imageProps}) => (
    //           <img
    //               className={className}
    //               itemProp="image"
    //               alt={alt}
    //               {...imageProps}
    //               {...others}
    //           />
    //       )}
    //     />
    // ) : <img
    //         itemProp="image"
    //         alt={alt}
    //         src={src}
    //         placeholder={placeholderSrc}
    //         className={className}
    //         {...others}
    // />
    return (
        <img
            itemProp="image"
            alt={alt}
            src={src}
            // @ts-ignore
            placeholder={placeholderSrc}
            className={className}
            {...others}
        />
    )
}
