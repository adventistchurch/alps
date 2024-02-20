/**
 * Debounced resize to throttle execution
 * @param func
 * @param wait
 * @returns {Function}
 */
function debounce(func: { apply: (arg0: any, arg1: IArguments) => void }, wait: number | undefined) {
  let timeout: string | number | NodeJS.Timeout | null | undefined

  return function() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    // @ts-ignore
    const context = this
    const args = arguments

    const later = function() {
      timeout = null
      func.apply(context, args)
    }

    // @ts-ignore
    clearTimeout(timeout)

    timeout = setTimeout(later, wait)

    if (!timeout) func.apply(context, args)
  }
}

export default debounce
