import React from 'react';
import {themeBackgroundClass} from "../../global/colors";

export interface DropCapProps {
    /**
     * All characters passed to this field will be automatically converted to `UpperCase` and there is no possibility to translate them to `camelCase`.
     */
    letter: string
}

export const Dropcap = ({letter}: DropCapProps): JSX.Element => {
    return (
        <div>
            <span className={"o-drop-cap " + themeBackgroundClass + "--base"} style={{fontWeight: 'normal'}}>
                {letter}
            </span>
            <span hidden>{letter}</span>
        </div>
    )
}

