import React from "react";

export interface TotalsProps {
    subTotalLabel?: string,
    subTotal?: number,
    totalLabel?: string,
    total?: number,
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