import React from 'react'

function onItemClick(number: number, cb: () => void) {
    return cb
        ? (event: { preventDefault: () => void; }) => {
            event.preventDefault();
            cb();
        }
        : null
}

export interface PaginationItemProps {
    number?: number,
    isCurrent?: boolean,
    isDivider?: boolean,
    isNext?: boolean,
    isPrev?: boolean,
    label?: string,
    onClick?: () => void,
    url?: string,
}

export const PaginationItem = ({
                                   number,
                                   isCurrent,
                                   isDivider,
                                   isPrev,
                                   isNext,
                                   label,
                                   onClick,
                                   url = "",
                               }: PaginationItemProps): JSX.Element => {
    const isArrow = isPrev || isNext;

    return isCurrent ? (
        <span
            className="pagination__page pagination__page--current u-font-weight--bold u-padding--quarter u-theme--color--base">
      {number}
    </span>
    ) : isDivider ? (
        <span className="pagination__divide">{label}</span>
    ) : (
        <a
            className={`pagination__page u-font-weight--bold u-padding--quarter u-theme--color--darker ${
                isArrow ? `pagination__${isPrev ? 'prev' : 'next'}` : ''
            }`}
            href={url}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            onClick={onItemClick(number, onClick)}
        >
            {isArrow ? label : label || number}
        </a>
    )
}
