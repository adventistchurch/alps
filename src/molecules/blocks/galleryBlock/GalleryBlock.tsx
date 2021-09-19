import React from 'react';
import useToggle from "../../../helpers/useToggle";
import {backgroundColorClass, canBeClass, themeBorderColorClass} from "../../../global/colors";
import {Button} from "../../../components/button/Button";
import {Picture} from "../../../components/images/Picture";
import {ImageType} from "../../../components/images/ImageType";

export interface GalleryBlockProps {
    title: string,
    kicker?: string,
    images?: ImageType[]
}

export const GalleryBlock = ({title, kicker, images}: GalleryBlockProps): JSX.Element => {
    const { onToggle, openClass } = useToggle();

    let thumbImage;
    let otherImages;

    if(images) {
        thumbImage = images.length > 0 ? images[0] : null;
        otherImages = images.length > 1 ? images.slice(1) : null;
    }

    return (
        <div
            className={`
                c-gallery-block c-block u-border--left ${openClass} 
                ${backgroundColorClass}--gray--light
                ${canBeClass}--dark-dark
                ${themeBorderColorClass}--darker--left
            `}>
            <div className="c-gallery-block__header">
                <div className={"c-gallery-block__title u-padding u-spacing--half"}>
                    <h2 className="u-font--primary--s u-theme--color--darker">
                        {kicker &&
                        <span className="u-theme--color--base">
                                <em>{kicker}</em>
                            </span>
                        }
                        {title}
                    </h2>
                    <Button
                        outline={true}
                        small={true}
                        toggle={true}
                        onClick={onToggle}
                        icon={"plus"}
                    />
                </div>
                {thumbImage &&
                    <div
                        className="c-gallery-block__thumb u-background--cover"
                        style={{
                            backgroundImage: `url(${thumbImage.srcSet.default})`,
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    />
                }
            </div>
            {otherImages && (
                <div className="c-gallery-block__body">
                    {otherImages.map((image, key) => (
                        <div
                            className={`c-gallery-block__image ${
                                image.portrait ? 'is-portrait' : ''
                            }`}
                            key={key}
                        >
                            <Picture image={image} />
                            {image.caption && (
                                <div className="c-gallery-block__caption c-gallery-block__caption u-color--gray u-font--secondary--s u-padding u-padding--double--bottom">
                                    {image.caption}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}