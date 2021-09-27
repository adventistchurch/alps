import React from "react";
import useClasses from "../../../helpers/useClasses";
import useToggle from "../../../helpers/useToggle";
import {themeBorderColorClass} from "../../../global/colors";
import {MediaImage} from "../mediaBlock/MediaImage";
import {ImageType} from "../../../components/images/ImageType";
import {dateFormatsMap, DateTimeFormat} from "../../../helpers/DateTimeFormat";
import {Button} from "../../../components/button/Button";
import {getFontClass} from "../../../global/fonts";

export interface ContentBlockProps {
    title: string,
    titleSize?: "s" | "m" | "l",

    description: string,
    cta?: string,

    date?: number,
    datetime: number,
    dateFormat: keyof typeof dateFormatsMap,
    dateLocales?: [],
    dateStyle?: any,

    url?: string,
    meta?: string,
    category?: string,
    expand?: boolean,
    withImage?: boolean,
    more?: string,
    image?: ImageType
}

export const ContentBlock = ({
                                 title,
                                 titleSize,
                                 description,
                                 cta = "",
                                 date,
                                 dateFormat,
                                 dateLocales,
                                 dateStyle,
                                 url = "",
                                 meta = "",
                                 category = "",
                                 expand = false,
                                 withImage = false,
                                 more = "",
                                 image
                             }: ContentBlockProps): JSX.Element => {

    const {onToggle, openClass} = useToggle();

    const classes = useClasses(
        'c-block c-block__text u-border--left u-spacing ' + themeBorderColorClass + "--darker",
        {
            'c-block__text-expand': more,
            'has-image': image !== undefined,
        },
        `${openClass}`
    )

    const moreClasses = more
        ? " can-be--dark-dark u-clear-fix u-padding u-background-color--gray--light"
        : ""

    return (
        <div className={classes + moreClasses}>
            {image && <MediaImage image={image} url={url}/>}

            <h3 className={`${titleSize ? getFontClass("primary", titleSize) : "u-font--primary"} u-theme--color--darker`}>
                {url ? (
                    <a className="c-block__title-link u-theme--link-hover--dark" href={url}>
                        <strong>{title}</strong>
                    </a>
                ) : (
                    <strong>{title}</strong>
                )}
            </h3>

            {description && (
                <p className={"c-block__body"}>{description}</p>
            )}

            {(category || date) && (
                <span className="c-block__meta u-font--secondary--xs u-theme--color--dark">
                    {category && (
                        <div className="c-block__category u-text-transform--upper">
                            {category}
                        </div>
                    )}

                    {date && (
                        <time
                            className="c-block__date u-text-transform--upper"
                            dateTime={`${date}`}
                        >
                            <DateTimeFormat
                                datetime={date}
                                locales={dateLocales}
                                format={dateFormat}
                                style={dateStyle}
                            />
                        </time>
                    )}
                </span>
            )}

            {more ? (
                <>
                    <div className="c-block__content">
                        <p>{more}</p>
                    </div>
                    <Button
                        as={"a"}
                        className={openClass}
                        expand={true}
                        onClick={onToggle}
                        outline={true}
                        toggle={true}
                    />
                </>
            ) : (
                cta &&
                url && (
                    <Button
                        as="a"
                        className="c-block__button"
                        icon="arrow-long-right"
                        outline={true}
                        label={cta}
                        url={url}
                    />
                )
            )}
        </div>
    )
}
