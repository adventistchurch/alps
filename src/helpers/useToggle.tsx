import { useState } from 'react'

/**
 * Hook to toggle boolean value
 *
 * @param {boolean} initial - Default open value (optional)
 * @param {string} openClass - Default open class name (optional)
 * @param {string} closedClass - Default closed class name (optional)
 * @returns {object} With attributes: onToggle (func), open (bool), openClass (string)
 */
function useToggle(
  initial = false,
  openClass = 'this-is-active',
  closedClass = ''
): {onToggle: () => void, open: boolean, openClass: string} {
  const [open, setValue] = useState(initial)

  return {
    onToggle: () => setValue(!open),
    open,
    openClass: open ? openClass : closedClass,
  }
}

export default useToggle
