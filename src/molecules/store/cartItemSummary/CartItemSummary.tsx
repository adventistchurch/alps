import React from "react";

export interface CartItemSummaryProps {
    title?: string,
    count?: number,
    price?: number,
    currency?: string
}

export const CartItemSummary = ({
                                    title,
                                    count = 1,
                                    price,
                                    currency = "$"
                                }: CartItemSummaryProps): JSX.Element => {
    return (
        <div className="c-store-item__summary">
            <div className="c-store-item__summary--name"><span>{title} x {count}</span></div>
            <div className="c-store-item__summary--price"><span>{currency}{price}</span></div>
        </div>
    )
}