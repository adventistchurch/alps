import React from "react";
import {Icon} from "../../../atoms/icons/Icon";
import {
    FooterSecondaryNavigation,
    FooterSecondaryNavigationProps
} from "../../../molecules/navigation/footerSecondaryNavigation/FooterSecondaryNavigation";
import {
    FooterPrimaryNavigation,
    FooterPrimaryNavigationProps
} from "../../../molecules/navigation/footerPrimaryNavigation/FooterPrimaryNavigation";

export interface AddressType {
    street?: string,
    postcode?: number | string,
    locality?: string,
    region?: string,
    country?: string,
    phone?: string
}

export interface FooterProps {
    address?: AddressType,
    /**
     * Specify the locality of your Footer
     */
    locality?: string,
    /**
     * Specify the region of your Footer
     */
    region?: string,
    /**
     * Specify the country of your Footer
     */
    country?: string,
    /**
     * Specify the phone of your Footer
     */
    phone?: string,
    /**
     * Specify the copyright of your Footer
     */
    copyright?: string,

    primaryNav?: FooterPrimaryNavigationProps,
    secondaryNav?: FooterSecondaryNavigationProps,
    /**
     * Specify the text of your Footer
     */
    text?: string,
    className?: string
}

export const Footer = ({
                           address = {
                               street: "12501 Old Columbia Pike",
                               postcode: "20904",
                               locality: "Silver Spring",
                               region: "MD",
                               country: "USA",
                               phone: "301-680-6000",
                           },
                           copyright = "Copyright ©2021, General Conference of Seventh-day Adventists",
                           primaryNav,
                           secondaryNav,
                           text = "Adventist.org is the Official website of the Seventh-day Adventist world church"
                       }: FooterProps): JSX.Element => {
    return (
        <div className="c-footer u-theme--background-color--darker" role="contentinfo">
            <div className="c-footer--inner u-color--white l-grid l-grid--7-col l-grid-wrap l-grid-wrap--6-of-7">
                <div className="c-footer__description l-grid-item l-grid-item--m--3-col">
                    <p className="c-footer__description-text u-font--secondary--m">
                        {text}
                    </p>
                </div>
                {primaryNav && (
                    <div className="c-footer__primary-nav l-grid-item l-grid-item--m--3-col l-grid-item--l--1-col">
                        <FooterPrimaryNavigation {...primaryNav} />
                    </div>
                )}

                {secondaryNav && (
                    <div className="c-footer__secondary-nav l-grid-item l-grid-item--m--3-col l-grid-item--l--2-col">
                        <FooterSecondaryNavigation {...secondaryNav} />
                    </div>
                )}

                {/* TODO: .c-footer__logo hides the logo */}
                <div className="c-footer__logo u-path-fill--white l-grid-item--7-col l-grid-item--m--1-col">
                    <Icon name="logo-round"/>
                </div>

                <div className="c-footer__legal l-grid-item l-grid-item--m--3-col">
                    <p className="c-footer__copyright">{copyright}</p>
                    {address && (
                        <address
                            className="c-footer__address"
                            itemProp="address"
                            itemScope={true}
                            itemType="http://schema.org/PostalAddress"
                        >
                            {address.street && (
                                <>
                                    <span itemProp="streetAddress">{address.street}</span>,{" "}
                                </>
                            )}
                            {address.postcode && (
                                <>
                                    <span itemProp="addressPostCode">{address.postcode}</span>{" "}
                                </>
                            )}
                            {address.locality && (
                                <>
                                    <span itemProp="addressLocality">{address.locality}</span>,{" "}
                                </>
                            )}
                            {address.region && (
                                <>
                                    <span itemProp="addressRegion">{address.region}</span>{" "}
                                </>
                            )}
                            {address.country}{" "}
                            {address.phone && (
                                <a className="c-footer__phone u-link--white u-theme--link-hover--light"
                                   href={`tel:${address.phone}`} itemProp="telephone">
                                    {address.phone}
                                </a>
                            )}
                        </address>
                    )}
                </div>
            </div>
        </div>
    )
}
