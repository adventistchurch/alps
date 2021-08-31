import React from 'react'
import PropTypes from 'prop-types'

import { svgFillColors, themeColors } from '../global/colors';
import library from './library/index'

// Available icon names
export const iconNames = Object.keys(library)

interface IconProps {
    name: typeof iconNames,
    color?: typeof svgFillColors,
    themeColor?: typeof themeColors,
    fill?: string
}

export const Icon = ({name,
                     color,
                     fill,
                     themeColor}: IconProps): JSX.Element | string => {

    const IconComponent = library[name];

    return IconComponent ? (
        <IconComponent
            fill={fill}
            title={name}
            pathFill={color}
            themePathFill={themeColor}
        />
    ) : (
        `[${name}]`
    )
}

Icon.defaultProps = {
    name: 'logo',
    fill: '#9b9b9b',
}
