import React from 'react';
import {themeBackgroundClass} from "../../../global/colors";

export interface SubmitMessageProps {
    text: string
}

export const SubmitMessage = ({text}: SubmitMessageProps): JSX.Element => {
    return (
        <div className={`messaging u-color--white ${themeBackgroundClass + "--darker"} u-padding`}>
            <div className={"u-font--secondary--s"}>
                {text}
            </div>
        </div>
    )
}
