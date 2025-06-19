import React from "react";

import renderItems from "../../../helpers/renderItems";
import {fontSizesMap, fontTypesMap, getFontClass} from "../../../global/fonts";
import {Checkbox, CheckboxProps} from "./Checkbox";
import { RadioButton, RadioButtonProps } from "./RadioButton";

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
     options?: OptionItem[],
    type?: "checkbox" | "radio"
}
export type OptionItem = CheckboxProps | RadioButtonProps;

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
                <div className={getFontClass(titleFontSize, titleFontType)}>
                    {title}
                </div>
            )}
            {children ? children : options && renderItems(options, components[type], "")}
        </div>
    )
}
