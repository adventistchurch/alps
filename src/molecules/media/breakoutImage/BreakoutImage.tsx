import React from "react";

import {SourceSet} from "../../../atoms/images/SourceSet";
import useResponsiveStyles from "../../../helpers/useResponsiveStyles";
import {Figcaption} from "../figcaption/Figcaption";
import {InlineStyles} from "../../../helpers/InlineStyles";
import useBackgroundParallax from "../../../helpers/useBackgroundParallax";

const getBackgroundRule = (url: string) => `.c-breakout-image__background {
  background-image: url("${url}");
}`

export interface BreakoutImageProps {
    /**
     * Specify the caption of your BreakoutImage
     */
    caption?: string,
    srcSet: SourceSet,
    /**
     * Specify whether the BreakoutImage should be a parallax variant
     */
    parallax?: boolean,
}

export const BreakoutImage = ({caption, srcSet, parallax = false}: BreakoutImageProps): JSX.Element => {
    const {backgroundRef, parallaxStyles} = useBackgroundParallax({
        enabled: parallax,
        speed: 8,
    })

    const inlineStyles = useResponsiveStyles(getBackgroundRule, srcSet);

    return (
        <div className="c-breakout-image">
            {inlineStyles && <InlineStyles styles={inlineStyles}/>}

            <div
                ref={backgroundRef}
                className="c-breakout-image__background u-image--breakout u-background--cover"
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                style={parallaxStyles}
            />

            {caption && (
                <div className="c-breakout-image__caption">
                    <Figcaption>{caption}</Figcaption>
                </div>
            )}
        </div>
    )
}
