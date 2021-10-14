import React from "react";

export interface SuggestionsItem {
    key?: string,
    text?: string,
    href?: string;
    onClick?: () => void
}

export interface SuggestionsProps {
    items?: SuggestionsItem[]
}

export const Suggestions = ({items = []}: SuggestionsProps): JSX.Element => {
    return (
        <ul className="o-suggestions u-border--bottom u-theme--color--base">
            {items.map(({text, href, onClick, key}) => (
                <li key={key}
                    className="o-suggestions__item u-font--secondary u-padding--half--bottom u-padding--half--top">
                    <a className="o-suggestions__link" onClick={onClick} href={href}>
                        {text}
                    </a>
                </li>
            ))}
        </ul>
    )
}
