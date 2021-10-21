import React, {useState} from "react";
import {Icon} from "../../../components/icons/Icon";

export interface CartItemProps {
    title?: string,
    price?: number,
    currency?: string,
    image?: string,
    onClick?: () => void
}

export const CartItem = ({
                             title,
                             price = 1,
                             currency = "$",
                             image,
                             onClick
                         }: CartItemProps): JSX.Element => {
    const [count, updateCount] = useState(1);
    const [summary, updateSummary] = useState(1);

    const onChangeSum = (event: any) => {
        const newCount = event.target.value;
        updateCount(newCount);
        updateSummary(newCount * price);
    }

    return (
        <div className="c-store-cart-item">
            <div className="c-store-cart-item__image"
                 style={{backgroundImage: `url(${image})`}}>
                <div className="c-store-cart-item__remove">
                    <Icon name={"close"}/>
                    <span onClick={onClick}>remove</span>
                </div>
            </div>
            <div className="c-store-cart-item__content u-theme--color--darker">
                <div className="c-store-cart-item__col--title c-store-cart-item__col">
                    {title}
                </div>
                <div className="c-store-cart-item__col--price c-store-cart-item__col">
                    <span>{currency} {price}</span>
                </div>
                <div className="c-store-cart-item__col--quantity c-store-cart-item__col">
                    <input onChange={event => onChangeSum(event)} type="text" value={count}
                           className="u-theme--color--darker"/>
                </div>
                <div className="c-store-cart-item__col--subtotal c-store-cart-item__col">
                    {currency} <span>{summary}</span>
                </div>
                <div className="c-store-cart-item__col--remove c-store-cart-item__col">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><title>o-icon__close</title>
                        <path
                            d="M9.91,1.5,8.5.09,5,3.59,1.5.09.09,1.5,3.59,5,.09,8.5,1.5,9.91,5,6.41l3.5,3.5L9.91,8.5,6.41,5Z"
                            fill="#9b9b9b"/>
                    </svg>
                    <span>remove</span>
                </div>
            </div>
        </div>
    )
}