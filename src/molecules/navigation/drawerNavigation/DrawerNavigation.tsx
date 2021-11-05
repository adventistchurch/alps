import React from "react";

import {SecondaryNavigation, SecondaryNavigationProps} from "../secondaryNavigation/SecondaryNavigation";
import {PrimaryNavigation, PrimaryNavigationProps} from "../primaryNavigation/PrimaryNavigation";
import {GridItem} from "../../../components/grids/GridItem";
import {IconWrap} from "../../../components/icons/IconWrap";
import {GridSeven} from "../../../components/grids/GridSeven";
import {Search, SearchProps} from "../../forms/search/Search";

export interface DrawerNavigationProps {
    aboutLeft?: React.ReactNode,
    aboutRight?: React.ReactNode,
    primaryNav?: PrimaryNavigationProps,
    renderSearchBox?: (el: any) => React.ReactNode,
    search?: SearchProps,
    secondaryNav?: SecondaryNavigationProps,
    showDrawer?: boolean,
    onClick?: () => void
}

export const DrawerNavigation = ({
                                     aboutLeft,
                                     aboutRight,
                                     primaryNav,
                                     renderSearchBox,
                                     search,
                                     secondaryNav,
                                     showDrawer = false,
                                     onClick
                                 }: DrawerNavigationProps): JSX.Element => {
    const searchProps = {...search};

    return (
        <GridSeven
            className={`c-drawer ${showDrawer ? "this-is-active" : ""}`}
            onClick={onClick}
        >
            <div className="c-drawer__toggle u-theme--background-color-trans--darker"
                 onClick={onClick}
            >
                {/* TODO: Can this be a SVG icon? */}
                <div className="u-icon o-icon__close">
                    <span/>
                    <span/>
                </div>
            </div>
            <GridItem
                className="c-drawer__container u-spacing l-grid-wrap l-grid-wrap--6-of-7 l-grid-item--s--6-col u-theme--background-color--darker">
                <div className="c-drawer__search">
                    {renderSearchBox ? (
                        renderSearchBox(searchProps)
                    ) : (
                        <Search {...searchProps} />
                    )}
                </div>
                <div className="c-drawer__nav">
                    <div className="c-drawer__nav-primary">
                        <PrimaryNavigation {...primaryNav} />
                    </div>
                    <div className="c-drawer__nav-secondary">
                        <SecondaryNavigation
                            {...secondaryNav}
                            showMenu={false}
                            showSearch={false}
                        />
                    </div>
                </div>
                <div className="c-drawer__logo">
                    <IconWrap name="logo" color="white" size="l"/>
                </div>
                <div className="c-drawer__about">
                    {aboutLeft && (
                        <div className="c-drawer__about-left u-spacing">
                            {aboutLeft}
                        </div>
                    )}
                    <div className="c-drawer__about-right u-spacing--half">
                        {aboutRight}
                    </div>
                </div>
            </GridItem>
        </GridSeven>
    )
}
