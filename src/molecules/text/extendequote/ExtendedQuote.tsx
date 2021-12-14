import React from "react";

export interface ExtendedQuoteProps {
    /**
     * Specify the title of your ExtendedQuote
     */
    title: string,
    /**
     * Specify the quote of your ExtendedQuote
     */
    quote?: string,
    /**
     * Specify the author of your ExtendedQuote
     */
    author?: string,
    /**
     * Specify the minutes of your ExtendedQuote
     */
    minutes?: number,
}

export const ExtendedQuote = ({title,quote,author,minutes}:ExtendedQuoteProps): JSX.Element => {
    return (
        <div className={"text"}>
            <blockquote className={"quote--extended"}>
                <h2>{title}</h2>
                <small>{ `Reading time: ${minutes} minutes`}</small>
                <br/>
                <p>{quote}</p>
                <br/>
                <em>-{author}</em>
            </blockquote>
        </div>
    )
}