import React from "react";

export interface CartItemSummaryProps {
    /**
     * Specify the title of your CartItemSummary
     */
    title?: string,
    /**
     * Specify the count of your CartItemSummary
     */
    count?: number,
    /**
     * Specify the price of your CartItemSummary
     */
    price?: number,
    /**
     * Specify the currency of your CartItemSummary
     */
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