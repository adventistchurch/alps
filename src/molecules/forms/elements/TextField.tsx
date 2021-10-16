import React from "react";

import {FormLabel} from "./FormLabel";
import {BaseInput} from "./BaseInput";

export interface TextFieldProps {
    error?: string,
    id?: string,
    label?: string,
    labelOptional?: string,
    labelClass?: string,
    labelSpacing?: string,
    name: string,
    placeholder?: string,
    type?: "email" | "password" | "search" | "text" | "number" | "checkbox" | "textarea",
    value?: string,
    rows?: number
}

export const TextField = ({
                              label,
                              labelOptional,
                              labelClass,
                              labelSpacing,
                              type = "text",
                              rows,
                              ...props
                          }: TextFieldProps): JSX.Element => {

    return (
        <FormLabel
            className={labelClass}
            error={props.error}
            htmlFor={props.name}
            text={label}
            textOptional={labelOptional}
            // spacing={labelSpacing}
        >
            {type === "textarea" ?
                <textarea
                    aria-required={true}
                    name="comment"
                    required={true}
                    rows={rows}
                    placeholder={props.placeholder}
                />
                : <BaseInput {...props} type={type}/>}
        </FormLabel>
    )
}

