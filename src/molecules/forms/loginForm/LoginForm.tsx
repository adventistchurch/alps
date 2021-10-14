import React from "react";

import {Button} from "../../../components/button/Button";
import {SubmitMessage} from "../elements/SubmitMessage";

export interface LoginFormProps {
    forgotPwdLabel?: string,
    forgotPwdUrl?: string,
    onSubmit?: () => void,
    passwordLabel?: string,
    submitLabel?: string,
    submitMessage?: string,
    title?: string,
    usernameLabel?: string
}

export const LoginForm = ({
                              forgotPwdLabel = "Forgot Password?",
                              forgotPwdUrl,
                              onSubmit,
                              passwordLabel = "Password'",
                              submitLabel = "Login",
                              submitMessage = "Logging you in...",
                              title = "Login",
                              usernameLabel = "Username",
                          }: LoginFormProps): JSX.Element => {
    return (
        <form className={"c-form u-spacing--half"}>
            <h2 className={"u-font--secondary--m u-theme--color--darker"}>{title}</h2>
            {submitMessage && <SubmitMessage text={submitMessage}/>}
            <input className={"form-input"} name="username" type={"text"} placeholder={`${usernameLabel}*`}/>
            <input className={"form-input"} name="password" type="password" placeholder={`${passwordLabel}*`}/>
            <div className={"u-flex u-flex--align-center"}>
                <Button label={submitLabel} onClick={onSubmit}/>
                <Button url={forgotPwdUrl} label={forgotPwdLabel} simple/>
            </div>
        </form>
    )
}
