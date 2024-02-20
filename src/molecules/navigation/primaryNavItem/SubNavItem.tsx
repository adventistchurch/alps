import React, {useCallback} from 'react'
import {SubNavArrow} from "./SubNavArrow";
import useToggle from "../../../helpers/useToggle";
import {SubNav} from "./SubNav";
import {backgroundColorClass, themeBackgroundClass, themeLinkHoverClass} from "../../../global/colors";

export interface SubNavItemProps {
    active?: boolean,
    level?: "secondary" | "tertiary",
    onClick?: (e: any) => void,
    subnav?: [],
    text: string,
    type: "primary" | "secondary",
    url?: string
}

export const SubNavItem = ({active = false, level, subnav, text, url, type, onClick}: SubNavItemProps): JSX.Element => {
    const {onToggle, openClass} = useToggle(false)
    const hasSubnav = Array.isArray(subnav) && subnav.length > 0
    const isTertiary = level === 'tertiary'
    const navLevel = isTertiary ? 'subnav__subnav' : 'subnav'

    const onArrowClick = useCallback(
        (e: { stopPropagation: () => void; }) => {
            e.stopPropagation()
            onToggle()
        },
        [onToggle]
    )

    return (
        <li
            className={`c-${type}-nav__${navLevel}__list-item c-subnav__list-item 
                ${hasSubnav ? 'has-subnav' : ''} 
                ${openClass}
                ${isTertiary ? null : backgroundColorClass + "--gray--light"}
                ${isTertiary ? themeBackgroundClass + "--base" : null}
            `}
        >
            <a
                className={`c-${type}-nav__${navLevel}__link c-subnav__link 
                    ${active ? ' active' : ''}
                    ${isTertiary ? themeLinkHoverClass + '--lighter' : themeLinkHoverClass + '--base'}
                `}
                href={url}
                color={`gray${type === 'primary' ? '--dark' : ''}`}
                onClick={onClick}
            >
                {text}
            </a>

            {hasSubnav && (
                <SubNavArrow
                    fill="gray"
                    className={openClass}
                    onClick={onArrowClick}
                    isSubNav
                />
            )}
            {hasSubnav && <SubNav items={subnav} level="tertiary" type={type}/>}
        </li>
    )
}
