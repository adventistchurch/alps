import React from "react";

interface ProductItem {
    label: string,
    price: number
}

export interface CheckoutProductsProps {
    productLabel?: string,
    productSubTotalLabel?: string,
    productTotalLabel?: string,
    currency?: string,
    items?: ProductItem[]
}

export const CheckoutProducts = ({
                                     productLabel = "Product",
                                     productSubTotalLabel = "Subtotal",
                                     productTotalLabel = "Total",
                                     currency = "$",
                                     items = [{label: "T", price: 10}]
                                 }: CheckoutProductsProps): JSX.Element => {

    let total = 0;
    items?.map(item => { return total = total + item.price});

    return (
        <div className="c-store-checkout-products">
            <div className="c-store-checkout-products__wrap">
                <div className="c-store-checkout-products__headers">
                    <div
                        className="c-store-checkout-products__headers__col c-store-checkout-products__headers__col--title u-theme--color--dark">
                        {productLabel}
                    </div>
                    <div
                        className="c-store-checkout-products__headers__col c-store-checkout-products__headers__col--subtotal u-theme--color--dark">
                        {productSubTotalLabel}
                    </div>
                </div>
                {items && items.map(item => (
                    <div key={item.label} className="c-store-checkout-products__item">
                        <div className="c-store-checkout-products__item__col--title c-store-checkout-products__item__col">
                            {item.label}
                        </div>
                        <div
                            className="c-store-checkout-products__item__col--subtotal c-store-checkout-products__item__col">
                            {currency} <span>{item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="c-store-totals">
                <div>
                    <p className="c-store-totals__field-name u-theme--color--dark">{productSubTotalLabel}</p>
                    <p className="c-store-totals__price u-theme--color--dark">{currency}{total}</p>
                </div>
                <div>
                    <p className="c-store-totals__field-name u-theme--color--dark">{productTotalLabel}</p>
                    <p className="c-store-totals__price u-theme--color--dark">{currency}{total}</p>
                </div>
            </div>
        </div>
    );
}