import React from 'react'

import {IconWrap} from "../../../atoms/icons/IconWrap";
import renderItems from "../../../helpers/renderItems";
import {usePagination} from "../../../helpers/usePagination";
import {PaginationItem} from "./PaginationItem";

const defaultNextIcon = (
    <IconWrap
        name={"arrow-bracket-right"}
        size="m"
        className={"u-space--half--left u-theme--path-fill--dark"}
    />
)
const defaultPrevIcon = (
    <IconWrap
        name={"arrow-bracket-left"}
        size="m"
        className={"u-space--half--left u-theme--path-fill--dark"}
    />
)

export interface PaginationProps {
    /**
     * Specify the page of your   Pagination
     */
    page: number,
    /**
     * Specify the dividerLabel of your   Pagination
     */
    dividerLabel?: string,
    /**
     * Specify the firstLabel of your   Pagination
     */
    firstLabel?: string,
    /**
     * Specify the lastLabel of your   Pagination
     */
    lastLabel?: string,
    nextIcon?: JSX.Element,
    /**
     * Specify the nextLabel of your   Pagination
     */
    nextLabel: string,
    onPageClick: () => void,
    onNextClick: () => void,
    onPrevClick: () => void,
    prevIcon?: JSX.Element,
    prevLabel: string,
    setUrl?: (number: number) => void,
    /**
     * Specify whether the Pagination should be a showFirstAndLast variant
     */
    showFirstAndLast?: boolean,
    /**
     * Specify whether the Pagination should be a showPrevAndNext variant
     */
    showPrevAndNext?: boolean,
    /**
     * Specify whether the Pagination should be a showIconArrows?: boolean,
     variant
     */
    showIconArrows?: boolean,
    /**
     * Specify the surrounding of your   Pagination
     */
    surrounding: number,
    /**
     * Specify the total of your   Pagination
     */
    total: number
}

export const Pagination = ({
                               page = 1,
                               dividerLabel = "…",
                               firstLabel = "First",
                               lastLabel = "Last",
                               nextLabel,
                               onPageClick,
                               onNextClick,
                               onPrevClick,
                               prevLabel,
                               total,
                               nextIcon = defaultNextIcon, prevIcon = defaultPrevIcon,
                               setUrl = (number: number) => `?page=${number}`,
                               showFirstAndLast = false,
                               showPrevAndNext = true,
                               showIconArrows = true,
                               surrounding = 3
                           }: PaginationProps): JSX.Element => {

    const {pages} = usePagination(page,
        dividerLabel,
        firstLabel,
        lastLabel,
        nextLabel,
        onPageClick,
        onNextClick, onPrevClick, prevLabel, total, nextIcon, prevIcon, setUrl, showFirstAndLast, showPrevAndNext, showIconArrows, surrounding);

    return (
        <nav
            className="pagination u-text-align--center u-center-block"
            role="navigation"
        >
            {renderItems(pages, PaginationItem, "")}
        </nav>
    )
}
