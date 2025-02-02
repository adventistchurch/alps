import React, {useCallback, useMemo, useState} from 'react'
import {SubNavArrow} from "./SubNavArrow";
import {SubNav} from "./SubNav";
import { SubNavItemProps } from './SubNavItem';

const statuses = {
    closed: {menu: false, search: false},
    open: {menu: true, search: false},
    openSearch: {menu: true, search: true},
}

export function useItemId(text: string, url: string) {
    return useMemo(
        () => (text ? `${text.toLowerCase().replace(' ', '-')}-${url}` : url),
        [text, url]
    )
}

export interface PrimaryNavItemProps {
    /**
     * Specify whether the PrimaryNavItem should be an active variant
     */
    active?: boolean,
    /**
     * Specify the linkClass of your  PrimaryNavItem
     */
    linkClass?: string,
    onClick?: () => void,
    /**
     * Specify whether the PrimaryNavItem should be a priority variant
     */
    priority?: boolean,
    subnav?: SubNavItemProps[],
    /**
     * Specify the text of your  PrimaryNavItem
     */
    text: string,
    /**
     * Specify the url of your  PrimaryNavItem
     */
    url?: string,
    /**
     * Specify whether the PrimaryNavItem should be a noWrap variant
     */
    noWrap?: boolean,
    isExternal?: boolean, //Eli added
}

export const PrimaryNavItem = ({
                                   active = false,
                                   linkClass = "",
                                   priority,
                                   text,
                                   subnav,
                                   url = "",
                                   onClick,
                                   noWrap,
                                   isExternal = url.indexOf('http')===0
                               }: PrimaryNavItemProps): JSX.Element => {

    const [isOpen, setIsOpen] = useState(statuses.closed);
    const [openSubNav, setOpenSubNav] = useState(null);

    const id = useItemId(text, url)

    const openClass =
        (!(isOpen.search || isOpen.menu) && active) || openSubNav === id
            ? 'this-is-active'
            : ''

    const onArrowClick = useCallback(
        (e: { stopPropagation: () => void; preventDefault: () => void; }) => {
            e.stopPropagation()
            e.preventDefault()
            setIsOpen(isOpen ? statuses.closed : statuses.open)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setOpenSubNav(openSubNav !== id ? id : null)
        },
        [id, openSubNav, setOpenSubNav]
    )

    const linkAttr = {
        target: isExternal ? '_blank' : undefined,
        to: url || '',
        href: url || '',
        className: `c-primary-nav__link 
    ${openClass} 
    ${linkClass} 
    ${priority ? 'is-priority' : ''}
    ${noWrap ? 'u-flex--nowrap' : ''} 
    u-font--primary-nav u-theme--link-hover--base u-theme--border-color--base u-color--gray--dark`
      };

    return (
        <li
            className={`c-primary-nav__list-item ${
                subnav ? 'has-subnav' : ''
            } ${openClass}`}
        >
            {isExternal ? (
                <a {...linkAttr} onClick={onClick}>
                {text} <i className="fa fa-external-link u-space--quarter--left"></i>
                </a>
            ) : (
                <a {...linkAttr} onClick={onClick}>
                {text}
                </a>
                )
            }

            {subnav && <SubNavArrow onClick={onArrowClick} fill="gray"/>}
            {subnav && <SubNav items={subnav} className={openClass} type="primary"/>}
        </li>
    )
}
