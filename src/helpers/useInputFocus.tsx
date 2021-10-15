import { useEffect, useRef } from "react";

/**
 *
 * @param {Boolean} hasFocus
 *
 * @returns inputRef
 */
function useInputFocus(hasFocus: boolean) {
  const inputRef = useRef(null)
  const input = inputRef.current

  const focusTimeout = setTimeout(() => {
    if (hasFocus) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      input && input.focus()} else {input && input.blur()}
  }, 250)

  useEffect(() => () => clearTimeout(focusTimeout), [focusTimeout])

  return inputRef
}

export default useInputFocus
