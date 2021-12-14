import React from "react";

export interface PullquoteProps {
    /**
     * Specify the quote of your Pullquote
     */
    quote?: string,
    /**
     * Specify the author of your Pullquote
     */
    author?: string,
}

export const Pullquote = ({quote,author}:PullquoteProps): JSX.Element => {
    return (
            <blockquote className={"pullquote u-padding--right u-theme--border-color--darker--left u-theme--color--darker"}>
                <p>{quote}</p>
                <cite className={"o-citation u-theme--color--base"}>-{author}</cite>
            </blockquote>
    )
}