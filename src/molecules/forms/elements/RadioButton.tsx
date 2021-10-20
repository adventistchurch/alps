import React, {MouseEventHandler} from "react";
import {FormLabel} from "./FormLabel";
import {BaseInput} from "./BaseInput";

export interface RadioButtonProps {
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
    onClick?: (event: MouseEventHandler<HTMLAnchorElement>) => void;
}

export const RadioButton = ({
                                checked,
                                error,
                                id,
                                label,
                                labelOptional,
                                labelClass,
                                labelSpacing,
                                name,
                                value,
                                ...props
                            }: RadioButtonProps): JSX.Element => {

    return (
        <FormLabel
            className={labelClass}
            error={error}
            htmlFor={id || name}
            position="bottom"
            text={label}
            textOptional={labelOptional}
            // spacing={labelSpacing}
        >
            <BaseInput
                checked={checked}
                error={error}
                id={id}
                name={name}
                type="radio"
                value={value}
                {...props}
            />
        </FormLabel>
    )
}

RadioButton.propTypes = {}
RadioButton.defaultProps = {
    labelClass: null,
    labelSpacing: null,
}

export default RadioButton
