import React from "react";
import useResponsiveStyles from "../../../helpers/useResponsiveStyles";
import {InlineStyles} from "../../../helpers/InlineStyles";
import {SourceSet} from "../../../components/images/SourceSet";

const getBackgroundRule = (url: string) => `.o-background-image {
  background-image: url("${url}");
}`

export interface PageHeaderProps {
    background?: SourceSet,
    kicker?: string,
    title?: string,
    url?: string
}

export const PageHeader = ({title, kicker, background, url}: PageHeaderProps): JSX.Element => {
    const bgInlineStyles = useResponsiveStyles(getBackgroundRule, background)

    const backgroundClass = background
        ? "o-background-image u-background--cover u-gradient--bottom"
        : ""

    return (
        <header className={`c-page-header c-page-header__simple ${backgroundClass} u-theme--background-color--dark`}>
            {bgInlineStyles && <InlineStyles styles={bgInlineStyles}/>}
            <div className="c-page-header__simple--inner u-padding">
                {kicker && (
                    <span className="o-kicker u-color--white">
            {kicker}
          </span>
                )}
                <h1 color="u-color--white u-font--primary--xxl">
                    <a href={url} className={"u-link--white u-link-hover--white"}>
                        {title}
                    </a>
                </h1>
            </div>
        </header>
    )
}
