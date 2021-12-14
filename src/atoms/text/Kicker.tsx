import React from 'react';
import {themeColorClass, themeColorsMap} from "../../global/colors";

export interface KickerProps {
    /**
     * Kicker content
     */
    content: string,
    /**
     * Theme color content
     */
    color?: keyof typeof themeColorsMap
}

export const Kicker = ({content, color = "base"}: KickerProps): JSX.Element => {
    return (
        <span className={themeColorClass + `--${color}`}>
            <em>{content}</em>
        </span>
    );
}