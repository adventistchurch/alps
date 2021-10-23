import React from "react";

export interface CheckoutBillingProps {
    /**
     * Billing INFORMATION
     */
    heading?: string,
    firstName?: string,
    lastName?: string,
    country?: string,
    countryOptions?: string[],
    streetAddress?: string,
    town?: string,
    state?: string,
    stateOptions?: string[],
    zip?: string,
    phone?: string,
    email?: string
}

export const CheckoutBilling = ({
                                    heading = "BILLING DETAILS",
                                    firstName = "First name",
                                    lastName = "Last name",
                                    country = "Country / Region",
                                    countryOptions = ["Option 1"],
                                    streetAddress = "Street address",
                                    town = "Town / City",
                                    state = "State",
                                    stateOptions = ["Option 1"],
                                    zip = "ZIP",
                                    phone = "Phone",
                                    email = "Email address"
                                }: CheckoutBillingProps): JSX.Element => {
    return (
        <div className="c-store-checkout-billing">
            <div className="c-block__heading u-theme--border-color--darker">
                <h3 className="c-block__heading-title u-theme--color--darker">{heading}</h3>
            </div>
            <form className="c-form u-spacing u-theme--color--dark">
                <div className="u-spacing--quarter">
                    <label className="u-font--secondary--m">{firstName}</label>
                    <input type="text"/>
                </div>
                <div className="u-spacing--quarter">
                    <label className="u-font--secondary--m">{lastName}</label>
                    <input type="text"/>
                </div>
                <div className="form__select u-spacing--half">
                    <label className="u-font--secondary--m">{country}</label>
                    <select>
                        {countryOptions?.map(item => <option key={item} value="one">{item}</option>)}
                    </select>
                </div>
                <div className="u-spacing--quarter">
                    <label className="u-font--secondary--m">{streetAddress}</label>
                    <input type="text" placeholder="House number and street name"/>
                    <input type="text" placeholder="Apartament, suite, unit, etc. (optional)"/>
                </div>
                <div className="u-spacing--quarter">
                    <label className="u-font--secondary--m">{town}</label>
                    <input type="text"/>
                </div>
                <div className="form__select u-spacing--half">
                    <label className="u-font--secondary--m">{state}</label>
                    <select>
                        {stateOptions?.map(item => <option key={item} value={item}>{item}</option>)}
                    </select>
                </div>
                <div className="u-spacing--quarter">
                    <label className="u-font--secondary--m">{zip}</label>
                    <input type="text"/>
                </div>
                <div className="u-spacing--quarter">
                    <label className="u-font--secondary--m">{phone}</label>
                    <input type="text"/>
                </div>
                <div className="u-spacing--quarter">
                    <label className="u-font--secondary--m">{email}</label>
                    <input type="text"/>
                </div>
            </form>
        </div>
    )
}