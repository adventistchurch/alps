import React from "react";

export interface CheckoutPlaceProps {
    /**
     * ADDITIONAL INFORMATION
     */
    heading?: string,
    cardNumber?: string,
    expiryDate?: string,
    expiryDateAdditionalInfo?: string,
    cardCode?: string,
    cardCodeAdditionalInfo?: string,
    additionalInfo?: string,
    buttonLabel?: string,
    url?: string,
    onClick?: () => void
}

export const CheckoutPlace = ({
                                  heading = "YOUR ORDER",
                                  cardNumber = "Card Number",
                                  expiryDate = "Expiry Date",
                                  expiryDateAdditionalInfo = "MM / YY",
                                  cardCode = "Card Code (CVC)",
                                  cardCodeAdditionalInfo,
                                  additionalInfo = "Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.\n",
                                  buttonLabel = "Place Order",
                                  url,
                                  onClick
                              }: CheckoutPlaceProps): JSX.Element => {
    return (
        <div className="c-store-checkout-place">
            <div className="c-block__heading u-theme--border-color--darker">
                <h3 className="c-block__heading-title u-theme--color--darker">{heading}</h3>
            </div>
            <div className="c-store-checkout-place__wrap">
                <div className="c-store-checkout-place__card">
                    <div className="c-store-checkout-place__card__number c-store-checkout-place__card__cell">
                        <div className="c-store-checkout-place__card__title u-theme--color--darker">{cardNumber}</div>
                        <input type="text"/>
                    </div>
                    <div className="c-store-checkout-place__card__date c-store-checkout-place__card__cell">
                        <div className="c-store-checkout-place__card__title u-theme--color--darker">{expiryDate}</div>
                        <div
                            className="c-store-checkout-place__card__subtitle u-theme--color--darker">{expiryDateAdditionalInfo}</div>
                        <input type="text"/>
                    </div>
                    <div className="c-store-checkout-place__card__cvc c-store-checkout-place__card__cell">
                        <div className="c-store-checkout-place__card__title u-theme--color--darker">{cardCode}</div>
                        <div className="c-store-checkout-place__card__subtitle">{ cardCodeAdditionalInfo ? cardCodeAdditionalInfo : ""}&nbsp;</div>
                        <input type="text"/>
                    </div>
                </div>
                <div className="c-store-checkout-place__text">{additionalInfo}</div>
                <div className="c-store-checkout-place__btn">
                    <a onClick={onClick} href={url} className="o-button ">{buttonLabel}</a>
                </div>
            </div>
        </div>
    )
}