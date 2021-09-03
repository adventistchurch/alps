/**
 * Splits an string  into an array using a separator and removes empty string form this array
 * @param {string} str string to be parsed
 * @param {string} separator string to parse
 * @returns `array`
 */
function splitAndRemoveEmpty(str: string, separator = ' ') {
    return str.split(separator).filter(Boolean);
}

/**
 * Returns a string of clases given a base class and some conditionals
 *
 * @param {string} base A string with base class(es) (optional)
 * @param {object} conditionals Mapping object where the key is the conditional class(es) to add and its value is the condition under which it will be applied (optional)
 * @param {string} extra A string with extra class(es) (optional)
 * @returns `string`
 */
export default function useClasses(base = '', conditionals: {[key: string]: string | boolean}, extra = ''): string {
    const classes = splitAndRemoveEmpty(base);

    for (const className of Object.keys(conditionals)) {
        const condition = conditionals[className];
        if (condition) classes.push(...splitAndRemoveEmpty(className));
    }

    if (extra) classes.push(...splitAndRemoveEmpty(extra));

    return classes.join(' ');
}
