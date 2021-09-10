import React from 'react'

import {Icon} from './Icon';
import useClasses from '../../helpers/useClasses';
import {getBaseClass} from "../../global/commons";
import {iconColorsMap, themeBackgroundClass, themeColorsMap} from "../../global/colors";
import {iconConfig} from "./_config";

const fixRightIcon = {marginLeft: '.3125rem', marginRight: '0'}

export interface IconWrapProps {
    as?: string,
    background?: keyof typeof themeColorsMap,
    className?: string,
    color?: keyof typeof iconColorsMap,
    name: keyof typeof iconConfig.iconNamesMap,
    size?: string,
    iconPosition?: string
}

export const IconWrap = ({
                             as = 'span',
                             background,
                             className,
                             color,
                             name,
                             size = 'm',
                             ...props
                         }: IconWrapProps): JSX.Element => {

    const classes = useClasses(
        'u-icon',
        {
            [`u-icon--${size}`]: size,
        },
        className
    );

    const backgroundColor = background ?
        getBaseClass(themeBackgroundClass, [background]) :
        "";

    const iconPositionStyles = props.iconPosition === "right" ? fixRightIcon : {};

    let elementByType: JSX.Element;

    switch (as) {
        case "button":
            elementByType =
                <button className={classes + " " + backgroundColor} style={iconPositionStyles}>
                    <Icon name={name} color={color}/>
                </button>;
            break;
        default:
            elementByType =
                <span className={classes + " " + backgroundColor} style={iconPositionStyles}>
                    <Icon name={name} color={color}/>
                </span>;
            break;
    }

    return (elementByType);
}
