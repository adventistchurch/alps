import React from 'react';
import {themeBackgroundClass, themeColorClass} from "../../../global/colors";

export interface BreakoutBlockProps {
    /**
     * Specify the title of your BreakoutBlock
     */
    title: string,
    /**
     * Specify the description of your BreakoutBlock
     */
    description: string,
    /**
     * Specify the content of your BreakoutBlocks Button
     */
    cta: string,
    /**
     * Specify the url of your BreakoutBlock
     */
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