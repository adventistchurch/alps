import React from "react";
import {Button} from "../../../components/button/Button";

export interface ChurchInfoLargeProps {
    location?: string,
    address?: string,
    phone?: string,
    mail?: string,
    site?: string,
    serviceList?: string[],
    buttonLabel?: string,
    image?: string,
    imageCaption?: string
}

export const ChurchInfoLarge = ({
                                    imageCaption = "Battle Creek Tabernacle",
                                    location = "",
                                    mail = "",
                                    phone = "",
                                    site = "",
                                    buttonLabel = "Back to map",
                                    image = "",
                                    serviceList = []
                                }: ChurchInfoLargeProps): JSX.Element => {
    return (
        <div className="c-church-info c-church-info--large">
            <div className="c-church-info__header" style={{backgroundImage: `url(${image})`}}>
                <div className="c-church-info__header__title">{imageCaption}</div>
            </div>
            <div className="c-church-info__wrap">
                <div className="c-church-info__item">
                    <div className="c-church-info__item__title">location</div>
                    <div className="c-church-info__item__text">{location}</div>
                </div>
                <div className="c-church-info__item">
                    <div className="c-church-info__item__title">mailing address</div>
                    <div className="c-church-info__item__text">{mail}</div>
                </div>
                <div className="c-church-info__item">
                    <div className="c-church-info__item__title">phone</div>
                    <div className="c-church-info__item__text">{phone}</div>
                </div>
                <div className="c-church-info__item">
                    <div className="c-church-info__item__title">email</div>
                    <div className="c-church-info__item__text">{mail}</div>
                </div>
                <div className="c-church-info__item">
                    <div className="c-church-info__item__title">website</div>
                    <div className="c-church-info__item__text">{site}</div>
                </div>
                <div className="c-church-info__item">
                    <div className="c-church-info__item__title">service list</div>
                    {serviceList?.map(el => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <div className="c-church-info__item__text">{el}</div>
                        )
                    })}
                </div>
                <Button
                    className={"c-church-info__btn"}
                    icon={"arrow-short-left"}
                    label={buttonLabel}
                    outline={true}
                />
            </div>
        </div>
    )
}