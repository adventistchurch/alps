import React from "react";
import {IconWrap} from "../../../atoms/icons/IconWrap";
import {SubNavArrow} from "../primaryNavItem/SubNavArrow";
import {SubNav} from "../primaryNavItem/SubNav";
import {iconConfig} from "../../../atoms/icons/_config";

export interface SecondaryNavItemProps {
    icon?: keyof typeof iconConfig.iconNamesMap,
    isPriority?: boolean,
    noWrap?: boolean,
    onClick?: (any: any) => void,
    subnav?: [],
    text: string,
    type?: "search" | "menu",
    url?: string,
}

export const SecondaryNavItem = ({
                                     icon,
                                     isPriority = false,
                                     noWrap,
                                     onClick,
                                     subnav,
                                     type,
                                     text,
                                     url = "#",
                                 }: SecondaryNavItemProps): JSX.Element => {
    return (
        <li
            className={`c-secondary-nav__list-item ${
                isPriority ? 'is-priority' : ''
            } ${subnav ? 'has-subnav' : ''} ${
                type ? `c-secondary-nav__list-item__${type}` : ''
            }
      `}
        >
            {onClick ?
                (<a
                    className={`c-secondary-nav__link u-font--secondary-nav u-theme--link-hover--base u-color--gray ${noWrap ? "u-flex--nowrap" : ""} `}
                    onClick={onClick}
                >
                    {icon && <IconWrap name={icon} size="xs" color="gray"/>}
                    {text}
                </a>) :
                (
                    <a
                        className={`c-secondary-nav__link u-font--secondary-nav u-theme--link-hover--base u-color--gray ${noWrap ? "u-flex--nowrap" : ""} `}
                        href={url}
                        onClick={onClick}
                    >
                        {icon && <IconWrap name={icon} size="xs" color="gray"/>}
                        {text}
                    </a>
                )
            }
            {subnav && (
                <>
                    <SubNavArrow/>
                    <SubNav items={subnav} type="secondary"/>
                </>
            )}
        </li>
    )
}
