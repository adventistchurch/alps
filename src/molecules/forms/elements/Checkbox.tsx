import React from "react";

import {FormLabel} from "./FormLabel";
import {BaseInput} from "./BaseInput";

export interface CheckboxProps {
    checked?: boolean,
    error?: string,
    id?: string,
    label: string,
    labelOptional?: string,
    labelClass?: string,
    labelSpacing?: string,
    name: string,
    placeholder?: string,
    value?: string,
}

export const Checkbox = ({
                             checked,
                             label,
                             labelOptional,
                             labelClass,
                             labelSpacing,
                             ...props
                         }: CheckboxProps): JSX.Element => {
    return (
        <FormLabel
            className={labelClass}
            error={props.error}
            htmlFor={props.id || props.name}
            position="bottom"
            text={label}
            textOptional={labelOptional}
            // spacing={labelSpacing}
        >
            <BaseInput checked={checked} type="checkbox" {...props} />
        </FormLabel>
    )
}
