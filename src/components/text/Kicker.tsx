import React from 'react';
import {themeColorClass} from "../../global/colors";

export interface KickerProps {
    content: string
}

export const Kicker = ({content}: KickerProps): JSX.Element => {
    return (
        <span className={themeColorClass + "--base"}>
            <em>{content}</em>
        </span>
    );
}