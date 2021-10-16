import React from "react";
import {BaseSearch} from "../elements/BaseSearch";
import {SuggestionsItem} from "../elements/Suggestions";

export interface SearchHeaderProps {
    filters?: [],
    placeholder?: string,
    searchAgainLabel?: string,
    searchLabel?: string,
    showSearchAgain?: boolean,
    showFilters?: boolean,
    suggestions?: SuggestionsItem[],
    term?: string
}

export const SearchHeader = ({
                                 filters,
                                 suggestions,
                                 placeholder = "Search...",
                                 searchAgainLabel = "Search Again",
                                 searchLabel = "Search",
                                 showSearchAgain = true,
                                 showFilters = false,
                                 term
                             }: SearchHeaderProps): JSX.Element => {
    return <BaseSearch
        placeholder={placeholder}
        searchAgainLabel={searchAgainLabel}
        searchLabel={searchLabel}
        showSearchAgain={showSearchAgain}
        isSearchHeader={true}
        filters={showFilters ? filters : undefined}
        suggestions={suggestions}
        term={term}
    />
}
