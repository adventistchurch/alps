import React, {useCallback} from "react";

import useClasses from "../../../helpers/useClasses";
import {Dropdown} from "./Dropdown";
import {Button} from "../../../atoms/button/Button";
import {darkThemeClass, themeBackgroundClass} from "../../../global/colors";
import {OptionGroup} from "./OptionGroup";
import {TextField} from "./TextField";
import Title from "../../../atoms/text/Title";
import {getBaseClass} from "../../../global/commons";

const components = {
    title: {component: Title},
    text: {component: TextField, getType: (type: string) => type},
    "checkbox-group": {component: OptionGroup, getType: () => "checkbox"},
    "radio-group": {component: OptionGroup, getType: () => "radio"},
    select: {component: Dropdown},
    button: {component: Button},
    submit: {component: Button},
}

function useFormFields(fields: [], children: React.ReactNode) {
    if (children) return children

    return fields.map(({type, name, id}, key) => {
        const {component, getType} = components[type] || components["text"]

        return React.createElement(component, {
            name,
            id: id || name,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            type: getType ? getType(type) : undefined,
            key,
        })
    })
}

export interface FormProps {
    action?: string,
    children?: React.ReactNode,
    className?: string,
    darkMode?: boolean,
    labelPosition?: "top" | "bottom",
    fields?: [],
    inline?: boolean,
    method?: "post" | "get",
    noValidate?: boolean,
    onSubmit?: (e: any) => void,
    role?: "search",
    title?: React.ReactNode
}

export const Form = ({
                         children,
                         className,
                         darkMode = false,
                         fields = [],
                         inline = false,
                         labelPosition,
                         onSubmit,
                         title
                     }: FormProps): JSX.Element => {
    const formClass = useClasses(
        "c-form",
        {
            "c-form--inline": inline,
            [darkThemeClass]: darkMode,
        },
        className
    )

    const formFields = useFormFields(fields, children);

    const _onSubmit = useCallback(
        (e: { preventDefault: () => void; }) => {
            if (typeof onSubmit === "function") {
                e.preventDefault()
                onSubmit(e)
            }
        },
        [onSubmit]
    )

    return (
        <form className={formClass + ` ${darkMode ? getBaseClass(themeBackgroundClass, ["darker"]) : null}`}
              onSubmit={_onSubmit}>
            {title ? (
                typeof title === "string" ? (
                    <Title
                        className={"u-text--strong"}
                        color={darkMode ? "white" : null}
                        fontSize="l"
                        text={title}
                        //eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        themeColor={darkMode ? null : "darker"}
                    />
                ) : (
                    title
                )
            ) : null}

            {formFields}
        </form>
    )
}
