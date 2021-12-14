import React from "react";
import {Button} from "../../../atoms/button/Button";

export interface InlineFormProps {
    onSubmit?: () => void,
    /**
     * Specify the submitLabel of your  InlineForm
     */
    submitLabel?: string
}

export const InlineForm = ({onSubmit, submitLabel = "Submit", ...props}: InlineFormProps): JSX.Element => {
    return (
        <form className={"c-form c-form--inline"} noValidate {...props}>
            <input style={{width: "100%"}} aria-required={true} name="text" required className={"form-input"}/>
            <Button label={submitLabel} onClick={onSubmit} className={"u-space--left"}/>
        </form>
    )
}
