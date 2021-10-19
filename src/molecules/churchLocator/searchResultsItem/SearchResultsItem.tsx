import React from "react";

export interface SearchResultsItemProps {
    title?: string,
    address?: string,
    site?: string,
    /**
     * Specify the `siteLabel` for changing display site. If this field is empty will show `site` property
     */
    siteLabel?: string
}

export const SearchResultsItem = ({title, address, site, siteLabel}: SearchResultsItemProps): JSX.Element => {
    return (
        <div className="c-search-results__item can-be--dark-light">
            <p className="c-search-results__item__title u-theme--color--darker">{title}</p>
            <p className="c-search-results__item__location">{address}</p>
            <p className="c-search-results__item__link">
                <a href={site} target="_blank" rel="noreferrer">{siteLabel ? siteLabel : site}</a>
            </p>
        </div>
    )
}