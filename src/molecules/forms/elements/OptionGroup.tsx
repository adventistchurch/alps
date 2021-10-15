import React from "react";

import renderItems from "../../../helpers/renderItems";
import {fontSizesMap, fontTypesMap, getFontClass} from "../../../global/fonts";
import {Checkbox} from "./Checkbox";
import RadioButton from "./RadioButton";

const components = {
    checkbox: Checkbox,
    radio: RadioButton,
}

export interface OptionGroupProps {
    children?: React.ReactNode,
    className?: string,
    title: string,
    titleFontSize?: keyof typeof fontSizesMap,
    titleFontType?: keyof typeof fontTypesMap,
    options?: [],
    type?: "checkbox" | "radio"
}

export const OptionGroup = ({
                                children,
                                options = [],
                                title,
                                titleFontSize = "s",
                                titleFontType = "secondary",
                                type = "checkbox"
                            }: OptionGroupProps): JSX.Element => {
    return (
        <div>
            {title && (
                <div className={getFontClass(titleFontSize, titleFontType) + " u-spacing--half"}>
                    {title}
                </div>
            )}
            {children ? children : options && renderItems(options, components[type], "")}
        </div>
    )
}
