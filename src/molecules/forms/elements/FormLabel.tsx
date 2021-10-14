import React from "react";

import {ErrorMessage} from "./ErrorMessage";

export interface FormLabelProps {
    children?: React.ReactNode,
    className?: string,
    error?: string,
    htmlFor?: string,
    text?: string,
    textOptional?: string,
    position?: "top" | "bottom"
    darkMode?: boolean
}

export const FormLabel = ({
                              children: field,
                              error,
                              htmlFor,
                              position = "top",
                              text,
                              textOptional,
                              className = "c-form-group",
                              darkMode = false
                          }: FormLabelProps): JSX.Element => {

    const fieldInTop = darkMode || position === 'bottom'

    if (!text) return field as JSX.Element;

    return (
        <div className={className}>
            {fieldInTop && field}
            <label htmlFor={htmlFor} className={"u-font--secondary--s"}>
                {text}{' '}
                {textOptional && (
                    <span className={"u-font--secondary--xs u-theme--color--lighter"}>{textOptional}</span>
                )}
            </label>

            {!fieldInTop && field}

            {error && <ErrorMessage text={error}/>}
        </div>
    )
}
