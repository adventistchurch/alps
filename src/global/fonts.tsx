/**
 * Fonts Configurations & methods
 */

import {getBaseClass} from "./commons"

export const fontClass = "u-font"
export const fontTypes = [
    "primary",
    "primary-nav",
    "secondary",
    "secondary-nav",
    "monospace",
]

export const fontTypesMap = {
    "primary": "primary",
    "primary-nav": "primary-nav",
    "secondary": "secondary",
    "secondary-nav": "secondary-nav",
    "monospace": "monospace"
}

export const fontSizes = ["xs", "s", "m", "l", "xl", "xxl"]

export const fontSizesMap = {
    "xs": "xs",
    "s": "s", "m": "m", "l": "l", "xl": "xl", "xxl": "xxl"
}

export const fontWeightClass = "u-font-weight"
export const fontWeights = ["bold"]

export const textClass = "u-text"
export const textStrongClass = `${textClass}--strong`

export const textAlignClass = "u-text-align"
export const textAlignOptions = ["left", "center", "right"]

export const textTransformClass = "u-text-transform"
export const textTransforms = ["upper", "lower"]

export function getFontClass(size: string, type: string) {
    return getBaseClass(fontClass, [type, size])
}

export function getTextAlignClass(align: string) {
    return getBaseClass(textAlignClass, [align])
}
