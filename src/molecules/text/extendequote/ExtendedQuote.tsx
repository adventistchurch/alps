import React from "react";

export interface ExtendedQuoteProps {
    title: string,
    quote?: string,
    author?: string,
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