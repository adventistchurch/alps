import React from 'react';

export interface HeadingBlockProps {
    title: string,
    linkText?: string,
    url?: string
}

export const HeadingBlock = ({title, linkText, url}: HeadingBlockProps): JSX.Element => {
    return (
        <div className="c-block__heading u-theme--border-color--darker">
            <h3 className="c-block__heading-title u-theme--color--darker">
                {title}
            </h3>
            {url && linkText &&
                <a
                    className={"c-block__heading-link u-theme--color--base u-theme--link-hover--dark"}
                    href={url}>
                    {linkText}
                </a>
            }
        </div>
    )
}