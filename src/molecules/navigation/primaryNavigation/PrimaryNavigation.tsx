import React from 'react'
import renderItems from "../../../helpers/renderItems";
import {PrimaryNavItem} from "../primaryNavItem/PrimaryNavItem";

interface PrimaryNavBaseProps {
    children?: React.ReactNode,
    /**
     * Specify whether the PrimaryNavBase should be a drawer variant
     */
    drawer?: boolean,
    /**
     * Specify whether the PrimaryNavBase should be a hasDropdown variant
     */
    hasDropdown?: boolean,
    items?: [],
    /**
     * Specify the url of your  PrimaryNavBase
     */
    navRef?: string,
    priorityDropdown?: React.ReactNode,
    /**
     * Specify the url of your  PrimaryNavBase
     */
    wrapperRef?: string,
}

export const PrimaryNavBase = ({
                                   children,
                                   hasDropdown,
                                   items = [],
                                   navRef,
                                   priorityDropdown,
                                   wrapperRef,
                               }: PrimaryNavBaseProps): JSX.Element => {

    return (
        <nav
            className={`c-primary-nav c-priority-nav priority-nav ${hasDropdown ? 'c-priority-nav-has-dropdown' : ''}`}
            ref={wrapperRef}
            role="navigation"
        >
            <ul className={"c-primary-nav__list c-priority-nav__list"} ref={navRef}>
                {children || renderItems(items, PrimaryNavItem, "")}
            </ul>
            {priorityDropdown}
        </nav>
    )
}

export interface PrimaryNavigationProps {
    items?: []
}

export const PrimaryNavigation = ({items = []}: PrimaryNavigationProps): JSX.Element => {
    return (
        <PrimaryNavBase items={items}/>
    )
}
