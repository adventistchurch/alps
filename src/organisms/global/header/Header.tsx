import React, {useState} from "react";
import {LogoType} from "../../../atoms/icons/library/LogoType";
import {
    PrimaryNavigation,
    PrimaryNavigationProps
} from "../../../molecules/navigation/primaryNavigation/PrimaryNavigation";
import {
    SecondaryNavigation,
    SecondaryNavigationProps
} from "../../../molecules/navigation/secondaryNavigation/SecondaryNavigation";
import {DrawerNavigation, DrawerNavigationProps} from "../../../molecules/navigation/drawerNavigation/DrawerNavigation";
import SDA from "../../../atoms/images/logos/SDA";
import SDAWithIcon from "../../../atoms/images/logos/SDAWithIcon";
import Gain from "../../../atoms/images/logos/Gain";

export interface HeaderProps {
    className?: string,
    drawer?: DrawerNavigationProps,
    logo?: LogoType,
    /**
     * Specify the type of your logoElement
     */
    logoElement: keyof typeof logosMap,
    primaryNav?: PrimaryNavigationProps,
    secondaryNav: SecondaryNavigationProps,
    /**
     * Specify whether the Header should be a usePathFill variant
     */
    usePathFill?: boolean
}

const logosMap = {
    "SDA": <SDA/>,
    "SDAWithIcon": <SDAWithIcon/>,
    "GAIN": <Gain/>
}

export const Header = ({
                           drawer = {},
                           logoElement,
                           usePathFill = true,
                           logo = {
                               canBeDark: false,
                               link: "/",
                               element: logosMap[logoElement],
                               useFillTheme: usePathFill
                           },
                           className, primaryNav, secondaryNav
                       }: HeaderProps): JSX.Element => {

    const [menuIsOpen, setOpenMenu] = useState(false);

    const changeOpenMenu = () => {
        setOpenMenu(!menuIsOpen);
    }

    const changeSearchMenu = () => {
        setOpenMenu(!menuIsOpen);
    }

    return (
        <>
            <header className={`c-header ${className ? className : ""}`} role="banner" id="header">
                <div className="c-header--inner">
                    <div className="c-header__nav-secondary">
                        <SecondaryNavigation {...secondaryNav} onClickMenu={changeOpenMenu}
                                             onClickSearch={changeSearchMenu}/>
                    </div>
                    <div className="c-header__logo c-logo">
                        <a
                            className={`c-logo__link ${logo?.useFillTheme ? "u-theme--path-fill--base" : ""} ${logo.canBeDark ? "can-be--dark-dark" : ""}`}
                            href={logo.link}
                        >
                            {logo.element}
                        </a>
                    </div>
                    <div className="c-header__nav-primary">
                        <PrimaryNavigation {...primaryNav}/>
                    </div>
                </div>
            </header>
            <DrawerNavigation
                primaryNav={primaryNav}
                secondaryNav={secondaryNav}
                showDrawer={menuIsOpen}
                onClick={changeOpenMenu}
                {...drawer}
            />
        </>
    )
}
