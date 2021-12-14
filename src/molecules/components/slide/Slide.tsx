import React from 'react';
import {Button} from "../../../atoms/button/Button";
import {Picture} from "../../../atoms/images/Picture";
import {ImageType} from "../../../atoms/images/ImageType";

export interface SlideProps {
    className?: string,
    /**
     * Specify the cta of your Slide
     */
    cta?: string,
    /**
     * Specify the dek of your Slide
     */
    dek?: string,
    /**
     * Specify the heading of your Slide
     */
    heading?: string,
    /**
     * Specify the image of your Slide
     */
    image: ImageType,
    /**
     * Specify whether the Slide should be an imageIsLazy variant
     */
    imageIsLazy?: boolean,
    /**
     * Specify the subtitle of your Slide
     */
    subtitle?: string,
    /**
     * Specify the textClass of your Slide
     */
    textClass?: string,
    /**
     * Specify the url of your Slide
     */
    url?: string
}

export const Slide = ({
                          className = "",
                          cta,
                          dek,
                          heading,
                          image,
                          imageIsLazy,
                          subtitle,
                          textClass,
                          url
                      }: SlideProps): JSX.Element => {
    return (
        <div className={`c-carousel__item u-position--relative ${className}`}>
            <Picture image={image} lazy={imageIsLazy}/>
            {heading && (
                <div className="c-carousel__item-text__wrap l-grid l-grid--7-col u-shift--left--1-col--at-large">
                    <div className={"l-grid-item l-grid-item--m--4-col l-grid-item--xl--3-col"}>
                        <div
                            className={`c-carousel__item-text u-padding--double--bottom u-padding--double--top u-spacing ${textClass && textClass}`}>
                            <div className="c-carousel__item-text--inner u-spacing--half">
                                <h2 className="c-carousel__item-heading u-font--primary--xl">
                                    {heading}
                                </h2>
                                {subtitle && (
                                    <h3 className="c-carousel__item-subtitle u-font--secondary--s u-text-transform--upper">
                                        <strong>{subtitle}</strong>
                                    </h3>
                                )}
                                <div className="c-carousel__item-dek">
                                    <p>{dek}</p>
                                </div>
                            </div>
                            {cta && url && (
                                <Button as="a" className="c-carousel__item-cta" url={url} label={cta}/>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
