import React from "react";
import {BaseSearch} from "../elements/BaseSearch";

export interface SearchFilterProps {
    filters?: [],
    sorting?: [],
    placeholder?: string,
    searchAgainLabel?: string,
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
