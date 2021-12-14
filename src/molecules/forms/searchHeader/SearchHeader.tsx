import React from "react";
import {BaseSearch} from "../elements/BaseSearch";
import {SuggestionsItem} from "../elements/Suggestions";

export interface SearchHeaderProps {
    filters?: [],
    /**
     * Specify the placeholder of your  SearchHeader
     */
    placeholder?: string,
    /**
     * Specify the searchAgainLabel of your  SearchHeader
     */
    searchAgainLabel?: string,
    /**
     * Specify the searchLabel of your  SearchHeader
     */
    searchLabel?: string,
    /**
     * Specify whether the SearchHeader should be a showSearchAgain variant
     */
    showSearchAgain?: boolean,
    /**
     * Specify whether the SearchHeader should be a showFilters variant
     */
    showFilters?: boolean,
    suggestions?: SuggestionsItem[],
    /**
     * Specify the term of your  SearchHeader
     */
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
