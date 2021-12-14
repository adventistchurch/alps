import React from "react";
import {Product, ProductItem} from "../product/Product";
import renderItems from "../../../helpers/renderItems";

export const productsTypes = ["cards", "list", "row"]
export const productsTypesMap = {
    "cards": "cards",
    "list": "list",
    "row": "row"
}

export interface ProductsProps {
    /**
     * Specify the type of your  Products
     */
    type?: keyof typeof productsTypesMap,
    /**
     * Specify the title of your  Products
     */
    title?: string,
    items?: ProductItem[]
}

export const Products = ({type = "cards", title, items = []}: ProductsProps): JSX.Element => {

    let elementByType: JSX.Element;
    const renderedItems = renderItems(items, Product, "");

    switch (type) {
        case "list":
            elementByType =
                <div className="c-store-products--list">
                    <div className="c-block__heading u-theme--border-color--darker">
                        <h3 className="c-block__heading-title u-theme--color--darker">{title}</h3>
                    </div>
                    <div className="c-store-products__wrap">
                        {renderedItems}
                    </div>
                </div>;
            break;
        case "row":
            elementByType =
                <div className="c-store-products--row">
                    <div className="c-block__heading u-theme--border-color--darker">
                        <h3 className="c-block__heading-title u-theme--color--darker">{title}</h3>
                    </div>
                    <div className="c-store-products__wrap">
                        {renderedItems}
                    </div>
                </div>;
            break;
        default:
            elementByType =
                <div className="c-store-products--cards">
                    <div className="c-block__heading u-theme--border-color--darker">
                        <h3 className="c-block__heading-title u-theme--color--darker">{title}</h3>
                    </div>
                    <div className="c-store-products__wrap">
                        {renderedItems}
                    </div>
                </div>;
            break;
    }

    return elementByType;
}