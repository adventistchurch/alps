import React from "react";
import renderItems from "../../../helpers/renderItems";
import {SecondaryNavItem} from "./SecondaryNavItem";

export interface SecondaryNavigationProps {
    items?: [],
    /**
     * Specify the menuLabel of your SecondaryNavigation
     */
    menuLabel?: string,
    /**
     * Specify the searchLabel of your SecondaryNavigation
     */
    searchLabel?: string,
    /**
     * Specify whether the SecondaryNavigation should be a showMenu variant
     */
    showMenu?: boolean,
    /**
     * Specify whether the SecondaryNavigation should be a showSearch variant
     */
    showSearch?: boolean,
    onClickSearch?: () => void,
    onClickMenu?: () => void
}

export const SecondaryNavigation = ({
                                        items = [],
                                        menuLabel = "Menu",
                                        searchLabel = "Search",
                                        showMenu = true,
                                        showSearch = true,
                                        onClickMenu,
                                        onClickSearch
                                    }: SecondaryNavigationProps): JSX.Element => {

    return (
        <nav className="c-secondary-nav" role="navigation">
            <ul className="c-secondary-nav__list">
                {renderItems(items, SecondaryNavItem, "")}
                {showSearch && (
                    <SecondaryNavItem
                        text={searchLabel}
                        icon="search"
                        type="search"
                        isPriority
                        noWrap
                        onClick={onClickSearch}
                    />
                )}
                {showMenu && (
                    <SecondaryNavItem
                        text={menuLabel}
                        icon="menu"
                        type="menu"
                        isPriority
                        noWrap
                        onClick={onClickMenu}
                    />
                )}
            </ul>
        </nav>
    )
}
