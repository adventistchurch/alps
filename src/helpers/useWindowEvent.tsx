import { useEffect } from "react";

import debounce from "./debounce";

/**
 * Hook that runs a callback during window"s resize event (debounced)
 *
 * @param {String} event Window event name (`resize`, `scroll`, etc.)
 * @param {Function} callback Funtion to be called in event
 * @param {Number} wait Time to wait for run the callback again (in milliseconds)
 * @param {Boolean} inmediate Should callback be run at start
 */
function useWindowEvent(event: any, callback: any, wait = 100, inmediate = false) {
  // if wait is not 0, set a debounced version of callback
  const debouncedCallback = wait > 0 ? debounce(callback, wait) : callback

  useEffect(() => {
    // If window is not available (SSR), or event nor callback are not present, bail out
    if (!window || !event || !callback) return

    // Call it as soon as possible run
    if (inmediate) callback()

    const events = Array.isArray(event) ? event : [event]

    // Set the event(s) listener(s)
    for (const e of events) {
      window.addEventListener(e, debouncedCallback)
    }

    // Cleanup listener(s) on unmount
    return () => {
      for (const e of events) {
        window.removeEventListener(e, debouncedCallback)
      }
    }
  }, [])
}

export default useWindowEvent
