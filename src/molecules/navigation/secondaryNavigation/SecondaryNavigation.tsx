import React from "react";
import renderItems from "../../../helpers/renderItems";
import {SecondaryNavItem} from "./SecondaryNavItem";

export interface SecondaryNavigationProps {
    items?: [],
    menuLabel?: string,
    searchLabel?: string,
    showMenu?: boolean,
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
