import React from "react";
import {getBaseClass} from "../../../global/commons";
import {themeColorClass} from "../../../global/colors";

export interface SliderArrowProps {
    className?: string,
    labelPrev?: string,
    labelNext?: string,
    prev?: boolean,
    next?: boolean,
    onClick?: () => void
}

export const SliderArrow = ({
                                className = "",
                                prev = true,
                                next = false,
                                labelPrev = "Previous",
                                labelNext = "Next",
                                onClick
                            }: SliderArrowProps): JSX.Element => {
    const isPrev = prev && !next

    const dir = isPrev ? "prev" : "next"
    const arrow = isPrev ? "‹" : "›" // prev: "‹" == &#8249; next: "›" == &#8250;
    const label = isPrev ? labelPrev : labelNext

    return (
        <span
            onClick={onClick}
            className={`c-arrow c-arrow--${dir} slick-arrow slick-${dir} ${className} ${getBaseClass(themeColorClass, ["darker"])}`} // u-icon u-icon--s ?
            aria-label={label}
        >
      {arrow}
    </span>
    )
}
