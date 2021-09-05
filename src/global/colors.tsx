/**
 * Color Configurations & methods
 */
import { sides, getBaseClass } from './commons'

export const primaryColors = [
  'bluejay',
  'campfire',
  'cave',
  'denim',
  'earth',
  'emperor',
  'forest',
  'grapevine',
  'lily',
  'ming',
  'night',
  'scarlett',
  'treefrog',
  'velvet',
  'winter',
]

export const secondaryColors = ['', 'dark']

export const grayscaleColors = [
  'black',
  'gray--darker',
  'gray--dark',
  'gray',
  'gray--light',
  'white',
]

export const grayscaleColorsMap = {
  'black': 'black',
  'gray--darker': 'gray--darker',
  'gray--dark': 'gray--dark',
  'gray': 'gray',
  'gray--light': 'gray--light',
  'white': 'white',
}

const stateColors = ['valid', 'error', 'warning', 'information']

// Text Colors:
export const textColorClass = 'u-color'
export const textColors = [
  'base',
  ...grayscaleColors,
  'black-transparent',
  'white-transparent',
  ...stateColors,
]

// Link Colors:
export const linkClass = 'u-link'
export const linkColors = ['white']
export const linkHoverClass = 'u-link-hover'
export const linkHoverColors = linkColors

// SVG Path Fill Colors
export const svgFillClass = 'u-path-fill'
export const svgFillColors = [...grayscaleColors]

export function getSvgFillClass(color: string): string {
  return getBaseClass(svgFillClass, [color]);
}

// Background Colors (grayscale)
export const backgroundColorClass = 'u-background-color'
export const backgroundColors = ['none', ...grayscaleColors]

// Theme Colors:

// - Foreground
export const themeColorClass = 'u-theme--color'
export const themeColors = ['darker', 'dark', 'base', 'light', 'lighter']

export const themeColorsMap = {
  'darker':'darker',
  'dark': 'dark',
  'base': 'base',
  'light': 'light',
  'lighter': 'lighter'
}

// - Background
export const themeBackgroundClass = 'u-theme--background-color'
export const themeBackgroundColors = [...themeColors]
export const themeBackgroundTransClass = `${themeBackgroundClass}-trans`
export const themeBackgroundTransColors = [...themeColors]

// - Border
export const themeBorderColorClass = 'u-theme--border-color'
export const themeBorderColors = [...themeColors]
export const themeBorderSides = [...sides]

export function getThemeBorderClass(color: string, side: string): string {
  return getBaseClass(`${themeBorderColorClass}--${color}`, [side])
}

// - Link
export const themeLinkHoverClass = 'u-theme--link-hover'

// - SVG Path Fill
export const themePathFillClass = 'u-theme--path-fill'

// - "Can be"
export const canBeClass = 'can-be'
export const canBeColors = [
  'dark-dark',
  'dark-light',
  'white',
  'light',
  'lighter',
]

// - Dark Theme
export const darkThemeClass = 'u-theme--dark'

// Overlay
export const overlayClass = 'u-overlay'
export const overlayColors = ['dark', 'light']
