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
    type?: "email" | "password" | "search" | "text" | "number" | "checkbox",
    value?: string
}

export const TextField = ({
                              label,
                              labelOptional,
                              labelClass,
                              labelSpacing,
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
            <BaseInput {...props} />
        </FormLabel>
    )
}

TextField.propTypes = {}
TextField.defaultProps = {
    type: "text",
}

export default TextField
