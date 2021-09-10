import React from 'react';
import library from './library';
import {iconConfig} from "./_config";
import {getBaseClass} from "../../global/commons";
import {grayscaleColors, iconColorsMap, svgFillClass, themeColors, themePathFillClass} from "../../global/colors";

interface IconProps {
    name: keyof typeof iconConfig.iconNamesMap,
    color?: keyof typeof iconColorsMap
}

export const Icon = ({name = "logo", color}: IconProps): JSX.Element => {
    const IconComponent = library.get(name);

    let className = "";

    //TODO: add default color
    if (color) {
        if (themeColors.includes(color)) className = getBaseClass(themePathFillClass, [color]);
        if (grayscaleColors.includes(color)) className = getBaseClass(svgFillClass, [color]);
    }

    return IconComponent ? (
        <IconComponent
            title={name}
            className={className}
        />
    ) : (
        <div> {name} </div>
    )
}
