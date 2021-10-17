import React from "react";

export interface FigcaptionProps {
    caption?: string,
    children?: React.ReactNode,
}

export const Figcaption = ({caption, children}: FigcaptionProps): JSX.Element => {
    return (
        <figcaption className="o-figcaption">
            <p className="o-caption u-color--gray u-font--secondary--s">
                {caption || children}
            </p>
        </figcaption>
    )
}
