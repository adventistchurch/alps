import React, {MouseEventHandler} from "react";

import useClasses from "../../../helpers/useClasses";
import useInputFocus from "../../../helpers/useInputFocus";

export interface BaseInputProps {
    checked?: boolean,
    error?: string,
    hasFocus?: boolean,
    id?: string,
    name?: string,
    placeholder?: string,
    type?: "checkbox" | "email" | "password" | "number" | "radio" | "search" | "text" | "textarea",
    value?: string,
    onClick?: (event: MouseEventHandler<HTMLAnchorElement>) => void
}

export const BaseInput = ({checked, error, type = "text", value, hasFocus = false, name, placeholder, onClick}: BaseInputProps): JSX.Element => {
    const inputClass = useClasses("form-input", {
        "has-error": !!error,
    })
    const inputFocusRef = useInputFocus(hasFocus);

    const isTextArea = type === "textarea";

    return React.createElement(
        isTextArea ? "textarea" : "input",
        {
            className: inputClass,
            defaultChecked: checked,
            defaultValue: value,
            ref: inputFocusRef,
            type,
            name: name,
            placeholder: placeholder,
            onClick: isTextArea ? null : onClick
        },
        isTextArea ? value : null
    )
}
