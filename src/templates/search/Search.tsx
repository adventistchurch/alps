import React from "react";
import {BlankTemplate, BlankTemplateProps} from "../BlankTemplate";
import {SearchHeader, SearchHeaderProps} from "../../molecules/forms/searchHeader/SearchHeader";
import {SearchResults} from "../../organisms/content/searchResult/SearchResults";
import {SearchContent} from "../../organisms/content/searchResult/SearchContent";
import {SuggestionsItem} from "../../molecules/forms/elements/Suggestions";

export interface SearchProps {
    results?: [],
    searchHeader?: SearchHeaderProps,
    blankTemplate: BlankTemplateProps,
    suggestions?: SuggestionsItem[],
}

export const Search = ({ results = [], searchHeader, blankTemplate, suggestions }: SearchProps): JSX.Element => {
  return (
    <BlankTemplate {...blankTemplate}>
      <SearchHeader {...searchHeader} suggestions={suggestions}/>

      <SearchContent>
        <SearchResults results={results} />
      </SearchContent>
    </BlankTemplate>
  )
}
