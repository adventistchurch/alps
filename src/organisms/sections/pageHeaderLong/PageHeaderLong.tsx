import React from "react";
import useResponsiveStyles from "../../../helpers/useResponsiveStyles";
import {InlineStyles} from "../../../helpers/InlineStyles";
import {SourceSet} from "../../../components/images/SourceSet";

const getBackgroundRule = (url: string) => `.o-background-image {
  background-image: url("${url}");
}`

export interface PageHeaderLongProps {
    background?: SourceSet,
    kicker?: string,
    title: string,
    subtitle?: string,
    url?: string,
}

export const PageHeaderLong = ({title, kicker, subtitle, background, url}: PageHeaderLongProps): JSX.Element => {
    const bgInlineStyles = useResponsiveStyles(getBackgroundRule, background)

    const backgroundClass = background
        ? "o-background-image u-background--cover has-background"
        : ""

    return (
        <div>
            <header
                className={`c-page-header c-page-header__long ${backgroundClass} u-space--zero u-theme--background-color--dark`}>
                {bgInlineStyles && <InlineStyles styles={bgInlineStyles}/>}
                <div
                    className={`c-page-header__long--inner ${
                        background ? "u-gradient--bottom" : ""
                    }`}
                >
                    <div
                        className={`c-page-header__content c-page-header__long__content l-grid-wrap l-grid-wrap--5-of-7 u-shift--left--1-col--at-xxlarge ${background ? "u-border-left--white--at-medium" : ""}`}
                    >
                        {kicker && (
                            <span className="c-page-header__kicker o-kicker u-color--white">
                {kicker}
              </span>
                        )}
                        <h1 className={"u-color--white u-font--primary--xl"}>
                            {url ? (
                                <a
                                    href={url}
                                    className={"c-page-header__title-link u-font-weight--bold u-link--white u-link-hover--white"}
                                >
                                    {title}
                                </a>
                            ) : (
                                title
                            )}
                        </h1>
                    </div>
                </div>
            </header>
            {subtitle && (
                <div className="c-page-header__subtitle c-page-header__long__subtitle l-grid l-grid--7-col">
                    <div
                        className={`u-font--secondary--m u-${background ? "border--left" : ""} l-grid l-grid-wrap l-grid-wrap--5-of-7 u-shift--left--1-col--at-xxlarge`}>
                        {subtitle}
                    </div>
                </div>
            )}
        </div>
    )
}
