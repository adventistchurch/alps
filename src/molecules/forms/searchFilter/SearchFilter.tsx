import React from "react";
import {BaseSearch} from "../elements/BaseSearch";

export interface SearchFilterProps {
    filters?: [],
    sorting?: [],
    /**
     * Specify the placeholder of your SearchFilter
     */
    placeholder?: string,
    /**
     * Specify the searchAgainLabel of your SearchFilter
     */
    searchAgainLabel?: string,
    /**
     * Specify the searchLabel of your SearchFilter
     */
    searchLabel?: string
}

export const SearchFilter = ({
                                 filters = [],
                                 sorting = [],
                                 placeholder = "Search...",
                                 searchAgainLabel = "Search Again",
                                 searchLabel = "Search"
                             }: SearchFilterProps): JSX.Element => {
    return (
        <BaseSearch
            filters={filters}
            sorting={sorting}
            placeholder={placeholder}
            searchAgainLabel={searchAgainLabel}
            searchLabel={searchLabel}
        />
    )
}
