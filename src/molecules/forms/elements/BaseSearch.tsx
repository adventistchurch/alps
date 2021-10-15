import React from "react";

import renderItems from "../../../helpers/renderItems";
import useToggle from "../../../helpers/useToggle";
import {getGridItemClass} from "../../../global/grids";
import {Form} from "./Form";
import {Button} from "../../../components/button/Button";
import {Suggestions} from "./Suggestions";
import {FilterGroup} from "./FilterGroup";

export interface BaseSearchProps {
    filters?: [],
    onSearch?: () => void,
    onSubmit?: () => void,
    placeholder?: string,
    searchAgainLabel?: string,
    searchLabel?: string,
    showSearchAgain?: boolean,
    sorting?: [],
    suggestions?: [],
    term?: string,
    className?: string
}

export const BaseSearch = ({
                               filters,
                               placeholder,
                               onSearch,
                               onSubmit,
                               searchAgainLabel = "Search Again",
                               searchLabel = "Search",
                               showSearchAgain,
                               sorting,
                               suggestions,
                               term
                           }: BaseSearchProps): JSX.Element => {
    const {onToggle, openClass} = useToggle(false, "c-filter-is-active", "");

    return (
        <div className={`c-filter ${openClass} u-background-color--gray--light u-padding u-spacing u-border--left l-field-container u-theme--border-color--darker`}>
            <Form className="c-filter__search" role="search" onSubmit={onSubmit}>
                <div className={"l-field-container u-spacing"}>
                    <div>
                        <div style={{position: "relative"}}>
                            <input
                                className="o-input__search u-color--gray u-font--secondary--s u-theme--color--darker"
                                onChange={onSearch}
                                placeholder={placeholder}
                                autoComplete="off"
                                type="search"
                                value={term}
                            />
                            {suggestions && <Suggestions items={suggestions}/>}
                        </div>
                    </div>
                    <div>
                        <div className={"u-flex"}>
                            <Button
                                className={"c-filter__button u-space--right"}
                                icon="search"
                                label={searchLabel}
                                outline={!showSearchAgain}
                            />
                            {(filters || sorting) && (
                                <Button
                                    as="span"
                                    className={`c-filter__toggle ${openClass}`}
                                    icon="settings"
                                    onClick={onToggle}
                                    simple
                                />
                            )}
                        </div>
                    </div>
                </div>
                {(filters || sorting) && (
                    <div className="c-filter__form u-padding--top">
                        <div className={"l-field-container u-spacing"}>
                            {filters && renderItems(filters, FilterGroup, "")}
                            {sorting && renderItems([sorting], FilterGroup, "")}
                            {showSearchAgain && (
                                <div
                                    className={getGridItemClass({noItemClass: true, size: "7"}) + " u-spacing--medium"}>
                                    <Button
                                        icon="search"
                                        iconSize="xs"
                                        label={searchAgainLabel}
                                        outline
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </Form>
        </div>
    )
}
