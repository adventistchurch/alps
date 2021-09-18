import React from 'react';
import {themeBackgroundClass, themeColorClass} from "../../../global/colors";

export interface BreakoutBlockProps {
    title: string,
    description: string,
    cta: string,
    url: string
}

export const BreakoutBlock = ({title, description, cta, url}: BreakoutBlockProps): JSX.Element => {
    return (
        <div className={"c-block__breakout u-padding u-padding--double--top u-padding--double--bottom u-spacing can-be--dark-dark " + themeBackgroundClass + "--darker"}>
            <h3 className={"c-block__title u-color--white"}>{title}</h3>
            <p className={"c-block__body " + themeColorClass + "--lighter"}>{description}</p>
            {cta && url && <a className={"o-button o-button--lighter"} href={url}>{cta}</a>}
        </div>
    )
}