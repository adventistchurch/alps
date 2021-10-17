/**
 * Flex Configurations & methods
 */

import {getBaseClass} from "./commons";

// Sizes and positioning (image/figure)
export const figureSizeClass = "size"
export const figureAlignClass = "align"

export const figureSizes = ["small", "medium", "large"];
export const figureSizesMap = {
  "small": "small",
  "medium": "medium",
  "large": "large"
}
// export const figureSizesMap = generateMapByArrString(figureSizes);
export const figureAlignPositions = ["left", "center", "right"];
export const figureAlignPositionsMap = {
  "left": "left",
  "center": "center",
  "right": "right"
}
// export const figureAlignPositionsMap = generateMapByArrString(figureAlignPositions);

export const getFigureSizeClass = (size: string): string => {
  return getBaseClass(figureSizeClass, [size])
}

export const getFigureAlignClass = (align: string): string => {
  return align ? `${figureAlignClass}${align}` : ""
}

export const getFigureClasses = (align: string, size: string): string => {
  const classes = []

  if (size) classes.push(getFigureSizeClass(size))
  if (align) classes.push(getFigureAlignClass(align))

  return classes.filter(x => Boolean(x)).join(" ")
}
