import React from "react";
import {TextField} from "../../forms/elements/TextField";

export interface CheckoutInfoProps {
    /**
     * ADDITIONAL INFORMATION
     */
    heading?: string,
    /**
     * Order notes (optional)
     */
    title?: string,
    /**
     * Notes about your order, e.g. special notes for delivery.
     */
    description?: string
}

export const CheckoutInfo = ({heading, title, description}: CheckoutInfoProps): JSX.Element => {
    return (
        <div className="c-store-checkout-info">
            <div className="c-block__heading u-theme--border-color--darker">
                <h3 className="c-block__heading-title u-theme--color--darker">{heading}</h3>
            </div>
            <div className="c-store-checkout-info__wrap">
                <div className="c-store-checkout-info__title u-theme--color--darker">{title}</div>
                <div className="c-store-checkout-info__text">{description}</div>
                <TextField name={"checkout_info_text"} type={"textarea"}/>
            </div>
        </div>
    )
}