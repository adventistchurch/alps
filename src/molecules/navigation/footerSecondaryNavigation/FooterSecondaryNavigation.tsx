import React from 'react'
import {IconWrap} from "../../../atoms/icons/IconWrap";
import {iconConfig} from "../../../atoms/icons/_config";

export interface FooterSecondaryNavigationProps {
    /**
     * Specify an `icon` to include in the defaultItemIcon through an string (name of the icon) representing the SVG data of the icon, similar to the `Icon` component
     */
    defaultItemIcon?: keyof typeof iconConfig.iconNamesMap,
    items?: { text: string, icon?: keyof typeof iconConfig.iconNamesMap, className?: string, onClick?: () => void, url: string }[]
}

export const FooterSecondaryNavigation = ({
                                              defaultItemIcon = "legal",
                                              items = []
                                          }: FooterSecondaryNavigationProps): JSX.Element => {
    return (
        <div className={"u-padding u-theme--background-color--darker"}>
            <nav className="c-footer__primary-nav__list u-spacing--half">
                {items.map(({icon, text, url, className, onClick}, key) => (
                    <a
                        href={url}
                        className={`c-footer__secondary-nav__link u-link--white u-theme--link-hover--light ${className}`}
                        key={`footer-nav-link-${key}`}
                        onClick={onClick}
                    >
                        <IconWrap
                            color="white"
                            size="xs"
                            name={icon || defaultItemIcon}
                            className={"u-space--half--right"}
                        />
                        {text}
                    </a>
                ))}
            </nav>
        </div>
    )
}
