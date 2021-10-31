/**
 * Provides classes methods and configurations for:
 * - padding
 * - space
 * - spacing
 */

import { getBaseClass } from './commons'

export const spacingSizes = [
  true,
  'quarter',
  'half',
  'double',
  'triple',
  'quad',
  'zero',
]

export const spacingSizesMap = {
  "quarter": "quarter",
  "half": "half",
  "double": "double",
  "triple": "triple",
  "quad": "quad",
  "zero": "zero",
}
export const spaceAfterSizes = ['medium']
export const spacingAfterSizes = ['medium', 'large']
export const spacingUntilSizes = ['small', 'medium', 'large', 'xxlarge']

export const clearFixClass = 'u-clear-fix'

const afterMod = (after: string) => (after ? `after-${after}` : "")
const untilMod = (until: string) => (until ? `until-${until}` : "")

export function getPaddingClass(side: string, size: string, until: string) {
  return getBaseClass('u-padding', [size, side, untilMod(until)])
}

export function getSpaceClass(side: string, size: string, after: string) {
  return getBaseClass('u-space', [size, side, afterMod(after)])
}

export function getSpacingClass(side: string, size: string, after: string, until: string) {
  return getBaseClass('u-spacing', [
    size,
    side,
    afterMod(after),
    untilMod(until),
  ])
}
