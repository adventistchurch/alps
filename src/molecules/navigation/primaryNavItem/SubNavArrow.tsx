import React from 'react'
import {grayscaleColorsMap, svgFillClass} from "../../../global/colors";

export interface SubNavArrowProps {
    className?: string,
    isSubNav?: boolean,
    onClick?: (e: any) => void,
    fill?: keyof typeof grayscaleColorsMap
}

export const SubNavArrow = ({className = "", fill, isSubNav, onClick}: SubNavArrowProps): JSX.Element => {
    return (
        <span
            className={`c-primary-nav${
                isSubNav ? '__subnav' : ''
            }__arrow c-subnav__arrow o-arrow--down ${className} 
            ${fill ? svgFillClass + "--" + fill : ""}`}
            onClick={onClick}
        />
    )
}
