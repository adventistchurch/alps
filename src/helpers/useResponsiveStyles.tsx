/**
 * Given a rule, wraps it in a media query
 * @param {string} rule - A CSS rule that can be wrapped
 * @param {string} query - A media query expressions (`min-width`, `max-with`, etc.)
 */
function wrapMediaQuery(rule: any, query: any) {
    return query ? `\n@media(${query}) {\t${rule}\n}` : rule
}

/**
 * Makes sure the "default: query is at the beginning.
 *
 * Example:
 * - Input keys:  ["500", "750", "1200", "default"]
 * - Output keys: ["default", "500", "750", "1200"]
 *
 * @param {Map} data
 */
function sortQueries(data: any) {
    const queries = []
    const {default: defaultQuery, ...others} = data

    if (defaultQuery) queries.push('default')
    queries.push(...Object.keys(others))
    return queries
}

// Define some default settings
const defaults = {
    mediaFeature: 'min-width',
    unit: 'px',
}

/**
 * Returns a string of css rules wrapped in queries for the provided media queries
 *
 * @param {function} rule - Function that returns a CSS rule as string
 * @param {Map} data - Map with data that will be used by `rule()` for a specific media query
 * @param {String} mediaFeature - default media features
 */
function useResponsiveStyles(rule: any, data: any, settings = defaults) {
    // Bailout when there is no data
    if (!data) return null

    const {mediaFeature, unit} = settings
    const styles = sortQueries(data).map(source => {
        const size = source === 'default' ? null : source
        return wrapMediaQuery(
            rule(data[source]),
            size ? `${mediaFeature}: ${size}${unit}` : null
        )
    })

    return styles.join('')
}

export default useResponsiveStyles
