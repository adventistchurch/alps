import React from "react";

export interface TotalsProps {
    /**
     * Specify the subTotalLabel of your Totals
     */
    subTotalLabel?: string,
    /**
     * Specify the subTotal of your Totals
     */
    subTotal?: number,
    /**
     * Specify the totalLabel of your Totals
     */
    totalLabel?: string,
    /**
     * Specify the total of your Totals
     */
    total?: number,
    /**
     * Specify the currency of your Totals
     */
    currency?: string
}

export const Totals = ({
                           subTotalLabel = "subtotal",
                           subTotal,
                           totalLabel = "total",
                           total,
                           currency = "$"
                       }: TotalsProps): JSX.Element => {
    return (
        <div className="c-store-totals">
            <div>
                <p className="c-store-totals__field-name u-theme--color--dark">{subTotalLabel}</p>
                <p className="c-store-totals__price u-theme--color--dark">{currency}{subTotal}</p>
            </div>
            <div>
                <p className="c-store-totals__field-name u-theme--color--dark">{totalLabel}</p>
                <p className="c-store-totals__price u-theme--color--dark">{currency}{total}</p>
            </div>
        </div>
    )
}