import React from "react";
import renderItems from "../../../helpers/renderItems";
import {Button} from "../../../atoms/button/Button";
import {Dropdown} from "../elements/Dropdown";

export interface FacetFilterProps {
    facets?: [],
    /**
     * Specify the filterLabel of your FacetFilter
     */
    filterLabel?: string,
    /**
     * Specify whether the FacetFilter should be an showButton variant
     */
    showButton?: boolean,
    /**
     * Specify the title of your FacetFilter
     */
    title?: string
}

export const FacetFilter = ({
                                facets = [],
                                filterLabel = "Filter",
                                title = "Filter the results"
                            }: FacetFilterProps): JSX.Element => {
    return (
        <form className="c-facet-filter-form">
            <fieldset className={"u-spacing--half"}>
                <legend className="u-font--secondary--m u-theme--color--darker">
                    {title}
                </legend>
                <div className={"u-spacing"}>
                    {renderItems(facets, Dropdown, "")}
                    {/* TODO: create component for screen readers? */}
                    <Button label={filterLabel}/>
                </div>
            </fieldset>
        </form>
    )
}
