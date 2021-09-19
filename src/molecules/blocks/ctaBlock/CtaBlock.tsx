import React from 'react';
import {SourceSet} from "../../../components/images/SourceSet";
import {canBeClass, themeBorderColorClass} from "../../../global/colors";
import useResponsiveStyles from "../../../helpers/useResponsiveStyles";
import {InlineStyles} from "../../../helpers/InlineStyles";
import {Button} from "../../../components/button/Button";

export interface CtaBlockProps {
    title: string,
    description?: string,
    picture?: SourceSet,
    asBackgroundImage?: boolean,
    buttons?: []
}

const getBackgroundRule = (url: string) => `.o-background-image {
  background-image: url('${url}');
}`

export const CtaBlock = ({
                             title,
                             description = "",
                             asBackgroundImage = false,
                             buttons,
                             picture
                         }: CtaBlockProps): JSX.Element => {

    const bgInlineStyles = useResponsiveStyles(getBackgroundRule, picture);

    const backgroundClass =
        picture && asBackgroundImage
            ? 'has-background-image o-background-image u-background--cover u-theme--gradient--bottom'
            : picture
            ? 'has-image'
            : '';

    return (
        <div className={`c-cta-block c-block ${canBeClass}--dark-dark u-border--left ${themeBorderColorClass}--darker--left ${backgroundClass}`}>
            {bgInlineStyles && <InlineStyles styles={bgInlineStyles} />}
            <div className={"c-cta-block__content c-block__content u-spacing"}>
                <div className={"c-cta-block__group c-block__group u-spacing"}>
                    {title && <h3 className={`c-block__title u-font--primary--${title && description ? 'l' : 'xl'}`}>{title}</h3>}
                    {description && <p className={`c-block__body ${title ? 'u-font--secondary' : 'u-font--secondary--m'}`}>{description}</p>}
                </div>
                {Array.isArray(buttons) && buttons.length > 0 && (
                    <div className="c-cta-block__buttons c-block__buttons">
                        {buttons.map(({ label, url, icon, iconPosition, outline, simple }, key) => (
                            <Button
                                as={"a"}
                                className={"c-block__button"}
                                icon={icon}
                                iconPosition={iconPosition}
                                iconSize={"m"}
                                key={`cta-block-${key}`}
                                label={label}
                                url={url}
                                outline={outline}
                                simple={simple}
                            />
                        ))}
                    </div>
                )}
            </div>
            {picture && !asBackgroundImage && (
                <div className="c-cta-block__image c-block__image o-background-image u-background--cover"/>
            )}
        </div>
    );
}