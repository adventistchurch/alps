import React from "react";

import useClasses from "../../helpers/useClasses";
import {Dropcap} from "./Dropcap";
import useDropcap from "../../helpers/useDropcap";

export interface TextProps {
    children?: React.ReactNode,
    className?: string,
    hasDropcap?: boolean,
    as?: "article" | "div" | "p" | "section" | "span"
}

export const Text = ({children, className, hasDropcap = false, as = "div"}: TextProps): JSX.Element => {
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
                <article className={classes}>
                    {content}
                </article>
            break;
        case "p":
            elementByType =
                <p className={classes}>
                    {content}
                </p>
            break;
        case "section":
            elementByType =
                <section className={classes}>
                    {content}
                </section>
            break;
        case "span":
            elementByType =
                <span className={classes}>
            {content}
          </span>
            break;
        default:
            elementByType =
                <div className={classes}>
                    {content}
                </div>
            break;
    }

    return elementByType;
}
