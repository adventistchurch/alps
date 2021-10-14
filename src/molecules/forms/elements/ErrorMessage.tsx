import React from "react";

export interface ErrorMessageProps {
    text: string
}

export const ErrorMessage = ({text}: ErrorMessageProps): JSX.Element => {
    return (
        <small className={"u-font--secondary--s u-clear-fix"} color="error">
            {text}
        </small>
    )
}
