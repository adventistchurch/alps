import React from "react";
import {Form} from "../elements/Form";

export interface SampleFormProps {
    /**
     * Specify the cancelLabel of your SampleForm
     */
    cancelLabel?: string,
    /**
     * Specify the submitLabel of your SampleForm
     */
    submitLabel?: string,
    children?: React.ReactNode,
    /**
     * Specify the title of your SampleForm
     */
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
