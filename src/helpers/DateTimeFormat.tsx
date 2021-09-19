export const dateFormats = ['date', 'time', 'datetime'];
export const dateFormatsMap = {
    'date': 'date',
    'time': 'time',
    'datetime': 'datetime'
}

export const dateStyles = ['full', 'long', 'medium', 'short'];

export interface DateTimeFormatProps {
    datetime: number,
    format: keyof typeof dateFormatsMap,
    locales?: [],
    style?: any
}

/**
 * Converts a date/string into a formatted one
 * (read more about format and styles here here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)
 *
 * @param {string} datetime Timestamp, string
 * @param {string} format One of `date`, `time` or `datetime`
 * @param {object} style Options format the date
 * @param {array} locales Array with prefered locales. An empty array uses browser's default locale.
 *
 * @returns {string}
 */
export const dateTimeFormat = ({datetime, format, locales, style}: DateTimeFormatProps): string => {
    const date = new Date(datetime);

    const {date: dateStyle = 'short', time: timeStyle = 'short'} = style;

    switch (format) {
        case 'date':
            return date.toLocaleDateString(locales, {dateStyle});
        case 'time':
            return date.toLocaleTimeString(locales, {timeStyle});
        default: {
            return date.toLocaleString(locales, {dateStyle, timeStyle});
        }
    }
}

/**
 * DateTimeFormat to be used as a React Component
 *
 * @param {object} props
 */
export const DateTimeFormat = ({datetime, format, locales, style = {}}: DateTimeFormatProps): JSX.Element => {
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <>
            {dateTimeFormat({datetime, format, locales, style})}
        </>
    )
}
