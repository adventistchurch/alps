import React from "react";
import {Button} from "../../../components/button/Button";
import {Icon} from "../../../components/icons/Icon";

export interface ProductItem {
    image?: string,
    meta?: string,
    title?: string,
    productName?: string,
    author?: string,
    content?: string,
    buttonLabel?: string,
    price?: number,
    currency?: string,
    tags?: string[]
}

export const Product = ({
                            image = "",
                            meta = "",
                            title,
                            productName,
                            author,
                            content,
                            tags,
                            buttonLabel = "View Cart",
                            price,
                            currency = "$"
                        }: ProductItem): JSX.Element => {
    return (
        <div className="c-store-products__item">
            <div className="c-store-products__item__header"
                 style={{backgroundImage: `url(${image})`}}>
                <div className="c-store-products__item__header-meta">
                    <div className="c-store-products__item__header-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.56 15"><title>icon-play</title>
                            <path d="M10.56,7.5,0,15V0Z" fill="#231f20"/>
                        </svg>
                    </div>
                    <div className="c-store-products__item__header-title">
                        <div className="c-store-products__item__header-button">
                            <a href="" className="o-button o-button--simple">
                                <Icon name={"arrow-short-left"}/>
                                {meta}
                            </a>
                        </div>
                        <div className="c-store-products__item__header-name">
                            <i>{meta}</i> {title}
                        </div>
                    </div>
                </div>
            </div>
            <div className="c-store-products__item__content">
                {price &&
                <div className="c-store-products__item__content-price u-theme--color--dark">{currency}{price}</div>}
                {tags &&
                    <div className="c-store-products__item__content-tags u-theme--color--dark">
                        {tags.map(tag => <span key={tag}>{tag} </span>)}
                    </div>
                }
                <div className="c-store-products__item__content-title">
                    <i className="u-theme--color--dark">{productName}</i> {author}
                </div>
                {content && <div className="c-store-products__item__content-text">{content}</div>}
                <div className="c-store-products__item__content-button">
                    <Button
                        label={buttonLabel}
                        outline={true}
                        icon={"arrow-short-right"}
                    />
                </div>
            </div>
        </div>
    )
}