import React from 'react'

import {IconWrap} from "../../../components/icons/IconWrap";
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
    page: number,
    dividerLabel?: string,
    firstLabel?: string,
    lastLabel?: string,
    nextIcon?: JSX.Element,
    nextLabel: string,
    onPageClick: () => void,
    onNextClick: () => void,
    onPrevClick: () => void,
    prevIcon?: JSX.Element,
    prevLabel: string,
    setUrl?: (number: number) => void,
    showFirstAndLast?: boolean,
    showPrevAndNext?: boolean,
    showIconArrows?: boolean,
    surrounding: number,
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
