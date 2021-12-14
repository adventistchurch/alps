import React from "react";

export interface ChurchInfoProps {
    /**
     * Specify the title of your ChurchInfo
     */
    title?: string,
    /**
     * Specify the address of your ChurchInfo
     */
    address?: string,
    /**
     * Specify the site of your ChurchInfo
     */
    site?: string,
    /**
     * Specify the `siteLabel` for changing display site. If this field is empty will show `site` property
     */
    siteLabel?: string
}

export const ChurchInfo = ({title, address, site, siteLabel}: ChurchInfoProps): JSX.Element => {
    return (
        <div className="c-church-info c-church-info--basic can-be--dark-light">
            <div className="c-church-info__wrap u-color--gray">
                <p className="c-church-info__title u-theme--color--darker">{title}</p>
                <p className="c-church-info__location">{address}</p>
                <p className="c-church-info__link">
                    <a href={site} target="_blank" rel="noreferrer">{ siteLabel ? siteLabel : site}</a>
                </p>
            </div>
        </div>
    )
}