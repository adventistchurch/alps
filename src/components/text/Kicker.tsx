import React from 'react';
import {themeColorClass} from "../../global/colors";

export interface KickerProps {
    content: string,
    color?: string
}

export const Kicker = ({content, color = "base"}: KickerProps): JSX.Element => {
    return (
        <span className={themeColorClass + `--${color}`}>
            <em>{content}</em>
        </span>
    );
}