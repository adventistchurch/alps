import React from "react";

import useClasses from "../../helpers/useClasses";
import {Dropcap} from "./Dropcap";
import useDropcap from "../../helpers/useDropcap";
import {spacingSizesMap} from "../../global/spacing";

export interface TextProps {
    children?: React.ReactNode,
    className?: string,
    hasDropcap?: boolean,
    as?: "article" | "div" | "p" | "section" | "span",
    spacing?: keyof typeof spacingSizesMap
}

export const Text = ({children, className, hasDropcap = false, as = "div", spacing = "double"}: TextProps): JSX.Element => {
    const spacingClass = "u-spacing--" + spacing;

    const classes = useClasses(
        "text",
        {
            "has-drop-cap": hasDropcap,
        },
        className
    )

  const content = useDropcap(children, {
        Dropcap,
        enabled: hasDropcap,
        tags: ["p"],
    })

    let elementByType: JSX.Element;

    switch (as) {
        case "article":
            elementByType =
                <article className={`${classes} ${spacingClass}`}>
                    {content}
                </article>
            break;
        case "p":
            elementByType =
                <p className={`${classes} ${spacingClass}`}>
                    {content}
                </p>
            break;
        case "section":
            elementByType =
                <section className={`${classes} ${spacingClass}`}>
                    {content}
                </section>
            break;
        case "span":
            elementByType =
                <span className={`${classes} ${spacingClass}`}>
            {content}
          </span>
            break;
        default:
            elementByType =
                <div className={`${classes} ${spacingClass}`}>
                    {content}
                </div>
            break;
    }

    return elementByType;
}
