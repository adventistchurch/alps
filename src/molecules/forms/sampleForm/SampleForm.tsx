import React from "react";
import {Form} from "../elements/Form";

export interface SampleFormProps {
    cancelLabel?: string,
    submitLabel?: string,
    children?: React.ReactNode,
    title?: JSX.Element
}

export const SampleForm = ({
                               cancelLabel = "Cancel", // eslint-disable-line no-unused-vars
                               children,
                               submitLabel = "Submit", // eslint-disable-line no-unused-vars
                               ...props
                           }: SampleFormProps): JSX.Element => {
    return (
        <Form className={"u-padding u-spacing"} {...props} title={props.title}>
            {children}
        </Form>
    )
}
