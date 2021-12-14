import React from "react";
import {Button} from "../../../atoms/button/Button";
import {ContentBlock, ContentBlockProps} from "../../../molecules/blocks/contentBlock/ContentBlock";
import {Text} from "../../../atoms/text/Text";

export interface SearchResultsProps {
    results?: ContentBlockProps[],
    /**
     * Specify the learnMoreLabel of your  SearchResults
     */
    learnMoreLabel?: string,
    /**
     * Specify the loadMoreLabel of your  SearchResults
     */
    loadMoreLabel?: string,
    /**
     * Specify the loadMoreUrl of your  SearchResults
     */
    loadMoreUrl?: string,
    /**
     * Specify the noResultsLabel of your  SearchResults
     */
    noResultsLabel?: string,
    onLoadMore?: () => void,
    /**
     * Specify whether the  SearchResults should be a showLoadMore variant
     */
    showLoadMore?: boolean,
}

export const SearchResults = ({
                                  learnMoreLabel = "Learn More",
                                  loadMoreLabel = "Load More",
                                  loadMoreUrl,
                                  noResultsLabel = "No results",
                                  onLoadMore,
                                  results = [],
                                  showLoadMore = false,
                              }: SearchResultsProps): JSX.Element => {
    return (
        <Text className="c-search-results" spacing="double">
            {Array.isArray(results) && results.length > 0 ? (
                results.map((item, i) => (
                    <ContentBlock
                        key={`result-item-${i}`}
                        titleSize="m"
                        cta={item.cta || learnMoreLabel}
                        dateFormat={item.dateFormat}
                        datetime={item.datetime}
                        date={item.date}
                        description={item.description}
                        title={item.title}
                        image={item.image}
                        category={item.category}
                        url={item.url}
                    />
                ))
            ) : (
                <p>{noResultsLabel}</p>
            )}

            {showLoadMore && (
                <Button
                    className={"u-space--half--left"}
                    as="a"
                    url={loadMoreUrl}
                    onClick={onLoadMore}
                    label={loadMoreLabel}
                />
            )}
        </Text>
    )
}
