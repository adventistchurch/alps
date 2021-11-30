/**
 * Custom Configurations & methods
 */

export enum ComponentsTypes {
  COMPONENT = "Component",
  CAN_BE_USE_AS_WRAPPER = `. Can be use as wrapper`
}

export enum ComponentsStatus {
  RELEASED = "Ready for Production",
  DEPRECATED = "Deprecated",
  NOT_READY = "NOT Ready for Production",
}

// Common Sides
export const sides = ['top', 'bottom', 'left', 'right']

// Display
export const displayClass = 'u-display'
export const displayOptions = ['block', 'inline-block']
export const vishiddenClass = 'is-vishidden'
export const positionClass = 'u-position'
export const positionOptions = ['absolute', 'relative']
export const centerBlockClass = 'u-center-block'

// Common Functions:

function getMod(key: string) {
  return `--${key}`;
}

export function getBaseClass(baseClass: string, mods: string[]): string {
  const modifiers =
    mods.length === 1
      ? getMod(mods[0])
      : mods.map(mod => getMod(mod)).join('')

  return `${baseClass}${modifiers}`
}
