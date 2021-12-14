import React from "react";
import {Suggestions, SuggestionsItem} from '../elements/Suggestions'
import {Button} from "../../../atoms/button/Button";

export interface SearchProps {
    /**
     * Specify whether the Search should be a hasFocus variant
     */
    hasFocus?: boolean,
    onSearch?: () => void,
    onSubmit?: () => void,
    /**
     * Specify the placeholder of your Search
     */
    placeholder?: string,
    /**
     * Specify the submitLabel of your Search
     */
    submitLabel?: string,
    suggestions?: SuggestionsItem[],
    /**
     * Specify the term of your Search
     */
    term?: string,
    /**
     * Specify the title of your Search
     */
    title?: string
}

export const Search = ({
                           term,
                           hasFocus,
                           onSubmit,
                           placeholder = "Search...",
                           submitLabel = "Search",
                           onSearch,
                           suggestions,
                           title = "Search",
                           ...props
                       }: SearchProps): JSX.Element => {
    return (
        <form className="search-form" role="search" onSubmit={onSubmit} {...props}>
            <fieldset>
                <legend className={"u-font--secondary--m is-vishidden u-theme--color--darker"}>
                    {title}
                </legend>
                <div style={{position: 'relative'}}>
                    <input
                        type="search"
                        className="search-form__input"
                        name="search"
                        placeholder={placeholder}
                        onChange={onSearch}
                        value={term}
                        required
                        autoComplete="off"
                    />
                    {suggestions && <Suggestions items={suggestions}/>}
                </div>

                <Button className={"search-form__submit is-vishidden"} label={submitLabel}/>
            </fieldset>
        </form>
    )
}
