import React from "react";

import {Kicker} from "./Kicker";
import {getFontClass} from "../../global/fonts";
import {getBaseClass} from "../../global/commons";
import {themeColorClass} from "../../global/colors";

export interface TitleProps {
    children?: React.ReactNode,
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    className?: string,
    kicker?: string,
    kickerColor?: string,
    text?: string,
    fontSize?: string,
    fontType?: string,
    themeColor?: string
}

export const Title = ({
                          children,
                          kicker,
                          kickerColor,
                          text,
                          as = "h2",
                          fontSize = "s",
                          fontType = "primary",
                          themeColor = "darker",
                          className
                      }: TitleProps): JSX.Element => {

    const classes = getFontClass(fontSize, fontType) + " " + getBaseClass(themeColorClass, [themeColor]) + " " + className;

    let elementByType: JSX.Element;

    switch (as) {
        case "h1":
            elementByType =
                <h1 className={classes}>
                    {kicker && <Kicker content={kicker} color={kickerColor}/>}{" "}
                    {text || children}
                </h1>
            break;
        case "h3":
            elementByType =
                <h3 className={classes}>
                    {kicker && <Kicker content={kicker} color={kickerColor}/>}{" "}
                    {text || children}
                </h3>
            break;
        case "h4":
            elementByType =
                <h4 className={classes}>
                    {kicker && <Kicker content={kicker} color={kickerColor}/>}{" "}
                    {text || children}
                </h4>
            break;
        case "h5":
            elementByType =
                <h5 className={classes}>
                    {kicker && <Kicker content={kicker} color={kickerColor}/>}{" "}
                    {text || children}
                </h5>
            break;
        case "h6":
            elementByType =
                <h6 className={classes}>
                    {kicker && <Kicker content={kicker} color={kickerColor}/>}{" "}
                    {text || children}
                </h6>
            break;
        default:
            elementByType =
                <h2 className={classes}>
                    {kicker && <Kicker content={kicker} color={kickerColor}/>}{" "}
                    {text || children}
                </h2>
            break;
    }

    return elementByType;
}

export default Title
