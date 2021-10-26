import React from "react";
import {Button} from "../../../components/button/Button";

export interface ProductDetailProps {
    image?: string,
    imageAlt?: string,
    title?: string,
    description?: string,
    content?: string,
    buttonLabel?: string
}

export const ProductDetail = ({image = "", imageAlt = "Product Detail img.", title, description, content, buttonLabel = "Back to shop"}: ProductDetailProps): JSX.Element => {
    return (
        <div className="c-store-product-detail">
            <div className="c-store-product-detail__image">
                <img src={image} alt={imageAlt}/>
            </div>
            <div className="c-store-product-detail__content">
                <div className="c-store-product-detail__title u-theme--color--dark">
                    {title}
                </div>
                <div className="c-store-product-detail__short-desc">{description}</div>
                <div className="c-store-product-detail__long-desc">{content}</div>
            </div>
            <div className="c-store-product-detail__button">
                <Button
                    label={buttonLabel}
                    outline={true}
                    icon={"arrow-short-left"}
                />
            </div>
        </div>
    )
}