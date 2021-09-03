import React from 'react';
import library from './library';
import {iconConfig} from "./_config";

interface IconProps {
    name: keyof typeof iconConfig.iconNamesMap,
    color?: string,
    fill?: string,
    themeColor?: string
}

export const Icon = ({name = "logo", color, fill = "#9b9b9b", themeColor}: IconProps): JSX.Element => {
    const IconComponent = library.get(name);

    return IconComponent ? (
        <IconComponent
            fill={fill}
            title={name}
            pathFill={color}
            themePathFill={themeColor}
        />
    ) : (
        <div> {name} </div>
    )
}
