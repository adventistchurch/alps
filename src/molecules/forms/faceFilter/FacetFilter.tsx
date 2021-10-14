import React from "react";
import renderItems from "../../../helpers/renderItems";
import {Button} from "../../../components/button/Button";
import {Dropdown} from "../elements/Dropdown";

export interface FacetFilterProps {
    facets?: [],
    filterLabel?: string,
    showButton?: boolean,
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
