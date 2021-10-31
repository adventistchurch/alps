import React from 'react';
import {themeBackgroundClass} from "../../global/colors";

export interface DropCapProps {
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

