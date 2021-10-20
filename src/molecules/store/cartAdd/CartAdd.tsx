import React, {useState} from "react";
import {Button} from "../../../components/button/Button";
import RadioButton from "../../forms/elements/RadioButton";
import {OptionGroup} from "../../forms/elements/OptionGroup";

export interface CartAddProps {
    title?: string,
    optionsLabel?: string,
    options?: string[],
    chooseAmountLabel?: string,
    chooseAmountDesc?: string,
    buttonLabel?: string
}

const defaultOption = ["Choose your own amount"];

export const CartAdd = ({
                            title = "YAKS AND SHEEP GIFT",
                            optionsLabel = "Select one option",
                            options,
                            chooseAmountLabel = "Choose your own amount",
                            chooseAmountDesc = "Enter your donation amount below",
                            buttonLabel = "Add to cart"
                        }: CartAddProps): JSX.Element => {
    const updateOptions = options ? options?.concat(defaultOption) : defaultOption;

    const [ownAmount, setOwnAmount] = useState(true);

    const onChange = (item: string) => {
        setOwnAmount(item === defaultOption[0])
    }

    return (
        <div className="c-store-cart-add">
            <OptionGroup className={"c-store-cart-add__title u-theme--color--dark"} title={title}>
                <div className="c-store-cart-add__options__title">{optionsLabel}</div>
                <div className="c-store-cart-add__options">
                    {updateOptions.map(item => {
                            return (
                                <RadioButton
                                    checked={item === defaultOption[0]}
                                    key={item}
                                    id={item}
                                    label={item}
                                    name={"option"}
                                    value={item}
                                    onClick={() => onChange(item)}
                                />
                            )
                        }
                    )}
                </div>
            </OptionGroup>
            <div className="c-store-cart-add__custom-amount">
                <div style={{display: ownAmount ? "inline" : "none"}}>
                    <div className="c-store-cart-add__custom-amount__title u-theme--color--dark">{chooseAmountLabel}</div>
                    <div className="c-store-cart-add__custom-amount__text">{chooseAmountDesc}</div>
                    <input type="text" className="c-store-cart-add__custom-amount__input"/>
                </div>

                <div className="c-store-cart-add__custom-amount__button">
                    <Button
                        label={buttonLabel}
                        icon={"plus"}
                    />
                </div>
            </div>
        </div>
    )
}