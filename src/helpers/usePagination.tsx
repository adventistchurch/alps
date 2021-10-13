import {range} from './range';

/**
 *
 * @returns {Array} - pages
 * @param page
 * @param dividerLabel
 * @param firstLabel
 * @param lastLabel
 * @param nextLabel
 * @param onPageClick
 * @param onNextClick
 * @param onPrevClick
 * @param prevLabel
 * @param total
 * @param nextIcon
 * @param prevIcon
 * @param setUrl
 * @param showFirstAndLast
 * @param showPrevAndNext
 * @param showIconArrows
 * @param surrounding
 */

export const usePagination = (
    page: number,
    dividerLabel: string,
    firstLabel: string,
    lastLabel: string,
    nextLabel: string,
    onPageClick: () => void,
    onNextClick: () => void,
    onPrevClick: () => void,
    prevLabel: string,
    total: number,
    nextIcon: JSX.Element,
    prevIcon: JSX.Element,
    setUrl: (number: number) => void,
    showFirstAndLast: boolean,
    showPrevAndNext: boolean,
    showIconArrows: boolean,
    surrounding: number,): any => {
    const first = 1;
    let lowerOffset = page - surrounding;
    let higherOffset = page + surrounding;
    const lowerLimit = first + surrounding;
    const higherLimit = total - surrounding;

    // Recalculate offsets
    lowerOffset = lowerOffset - 1 > lowerLimit ? lowerOffset : first;
    higherOffset = higherOffset + 1 < higherLimit ? higherOffset : total;

    // Initialize pages array
    const pages = []

    // Divider object
    const divider = {isDivider: true, label: dividerLabel}

    // Generates a page object
    function setPage(number: number, props = {}) {
        return {
            ...props,
            number,
            url: setUrl ? setUrl(number) : "",
            isCurrent: number === page ? true : undefined,
        }
    }

    // Generates pages for given range
    function setPagesForRange(range: number[]) {
        return range.map(i => {
            pages.push(setPage(i, {onClick: onPageClick}))
        })
    }

    // Add links and pages:

    // - First and Prev Links
    if (page > first) {
        // - Link First
        if (showFirstAndLast) {
            pages.push(setPage(first, {label: firstLabel}))
        }

        // - Link Prev
        if (showPrevAndNext) {
            pages.push(
                setPage(page - 1, {
                    label: showIconArrows ? prevIcon : prevLabel,
                    isPrev: true,
                    onClick: onPrevClick,
                })
            )
        }
    }

    // - First numbered pages
    if (lowerOffset > lowerLimit) {
        const firstRange = range(first, first + surrounding)
        setPagesForRange(firstRange);
        pages.push(divider);
    }

    // - Middle numbered pages
    const middleRange = range(lowerOffset, higherOffset)
    setPagesForRange(middleRange);

    // - Last numbered pages
    if (higherOffset < total) {
        const lastRange = range(total - surrounding, total)
        pages.push(divider);
        setPagesForRange(lastRange);
    }

    // - Next and Last Links
    if (page < total) {
        // - Link Next
        if (showPrevAndNext) {
            pages.push(
                setPage(page + 1, {
                    label: showIconArrows ? nextIcon : nextLabel,
                    isNext: true,
                    onClick: onNextClick,
                })
            )
        }

        // - Last page
        if (showFirstAndLast) {
            pages.push(setPage(total, {label: lastLabel}))
        }
    }

    return {pages: pages}
}
