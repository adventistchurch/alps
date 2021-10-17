/**
 * Debounced resize to throttle execution
 * @param func
 * @param wait
 * @returns {Function}
 */
function debounce(func, wait) {
  let timeout

  return function() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this
    const args = arguments

    const later = function() {
      timeout = null
      func.apply(context, args)
    }

    clearTimeout(timeout)

    timeout = setTimeout(later, wait)

    if (!timeout) func.apply(context, args)
  }
}

export default debounce
