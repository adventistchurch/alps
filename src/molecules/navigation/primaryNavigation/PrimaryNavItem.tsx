import React, {useCallback, useMemo, useState} from 'react'
import {SubNavArrow} from "../primaryNavItem/SubNavArrow";
import {SubNav} from "../primaryNavItem/SubNav";

const statuses = {
    closed: {menu: false, search: false},
    open: {menu: true, search: false},
    openSearch: {menu: true, search: true},
}

function useItemId(text: string, url: string) {
    return useMemo(
        () => (text ? `${text.toLowerCase().replace(' ', '-')}-${url}` : url),
        [text, url]
    )
}

export interface PrimaryNavItemProps {
    active?: boolean,
    linkClass?: string,
    onClick?: () => void,
    priority?: boolean,
    subnav?: [],
    text: string,
    url?: string,
    noWrap?: boolean,
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
                               }: PrimaryNavItemProps): JSX.Element => {

    const [isOpen, setIsOpen] = useState(statuses.closed);
    const [openSubNav, setOpenSubNav] = useState(null);

    const id = useItemId(text, url)

    const openClass =
        (!(isOpen.search || isOpen.menu) && active) || openSubNav === id
            ? 'this-is-active'
            : ''

    const onArrowClick = useCallback(
        e => {
            e.stopPropagation()
            e.preventDefault()
            setIsOpen(isOpen ? statuses.closed : statuses.open)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setOpenSubNav(openSubNav !== id ? id : null)
        },
        [id, openSubNav, setOpenSubNav]
    )

    return (
        <li
            className={`c-primary-nav__list-item ${
                subnav ? 'has-subnav' : ''
            } ${openClass}`}
        >
            <a
                className={`c-primary-nav__link 
                    ${openClass} 
                    ${linkClass} 
                    ${priority ? 'is-priority' : ''}
                    ${noWrap ? "u-flex--nowrap" : ""} 
                    u-font--primary-nav u-theme--link-hover--base u-theme--border-color--base u-color--gray--dark`
                }
                href={url}
                onClick={onClick}
            >
                {text}
            </a>
            {subnav && <SubNavArrow onClick={onArrowClick} fill="gray"/>}
            {subnav && <SubNav items={subnav} className={openClass} type="primary"/>}
        </li>
    )
}
