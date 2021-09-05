import React from 'react';
import library from './library';
import {iconConfig} from "./_config";
import {getBaseClass} from "../../global/commons";
import {grayscaleColorsMap, svgFillClass, themeColorsMap, themePathFillClass} from "../../global/colors";

interface IconProps {
    name: keyof typeof iconConfig.iconNamesMap,
    color?: keyof typeof grayscaleColorsMap,
    fill?: string,
    themeColor?: keyof typeof themeColorsMap
}

export const Icon = ({name = "logo", color, fill = "#9b9b9b", themeColor}: IconProps): JSX.Element => {
    const IconComponent = library.get(name);

    let className = "";

    if (themeColor) className = getBaseClass(themePathFillClass, [themeColor]);
    if (color) className = getBaseClass(svgFillClass, [color]);

    return IconComponent ? (
        <IconComponent
            fill={fill}
            title={name}
            className={className}
        />
    ) : (
        <div> {name} </div>
    )
}
