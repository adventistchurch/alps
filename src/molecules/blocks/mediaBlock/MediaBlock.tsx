import React from "react";

import {MediaImage} from "./MediaImage";
import presets from "./MediaBlock.presets";
import {Figure} from "../../media/figure/Figure";
import {dateFormatsMap, DateTimeFormat} from "../../../helpers/DateTimeFormat";
import {Button} from "../../../components/button/Button";
import {ImageType} from "../../../components/images/ImageType";
import useClasses from "../../../helpers/useClasses";
import {iconConfig} from "../../../components/icons/_config";

export const mediaBlocksTypes = Object.keys(presets);

export const MediaBlockTypesMap = {
    "default": "default",
    "column": "column",
    "feature": "feature",
    "featureHalf": "featureHalf",
    "featureWide": "featureWide",
    "featuredNews": "featuredNews",
    "archiveHome": "archiveHome",
    "archivePage": "archivePage",
    "full": "full",
    "inline": "inline",
    "inset": "inset",
    "mediaContent": "mediaContent",
    "mediaRow": "mediaRow",
    "longform": "longform",
    "row": "row",
    "stacked": "stacked",
    "relatedPost": "relatedPost",
    "video": "video"
}

export interface MediaBlockProps {
    asBackgroundImage?: boolean,
    mediaIcon?: "audio" | "gallery" | "video",
    blockProps?: string,
    category?: string,
    column?: boolean,
    cta?: string,
    ctaIcon?: keyof typeof iconConfig.iconNamesMap,
    ctaIconPosition?: "left" | "right",
    description?: string,
    date?: number,
    dateFormat?: keyof typeof dateFormatsMap,
    dateLocales?: [],
    dateStyle?: any,
    image?: ImageType,
    imageCaption?: string,
    kicker?: string,
    kickerAs?: "h1" | "h2" | "h3" | "h4",
    url?: string,
    reversed?: boolean,
    stackedUntilSmall?: boolean,
    title?: string,
    titlePrefix?: string,
    type?: keyof typeof MediaBlockTypesMap,
    video?: any
}

/**
 * The MediaBlock Component
 */
export const MediaBlock = ({
                               asBackgroundImage = false,
                               mediaIcon,
                               blockProps,
                               category,
                               cta,
                               ctaIcon = "arrow-long-right",
                               ctaIconPosition,
                               date = 123,
                               dateFormat = "date",
                               dateLocales,
                               dateStyle = {date: "long"},
                               description,
                               image,
                               imageCaption,
                               kicker,
                               reversed = false,
                               stackedUntilSmall,
                               title,
                               titlePrefix,
                               type,
                               video,
                               url,
                           }: MediaBlockProps): JSX.Element => {
    // Get preset props current type
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const preset = presets[type] || presets["default"]

    const isReversed = reversed !== undefined ? reversed : preset.reversed;

    const blockType = preset.type || type;
    const icon = mediaIcon || preset.icon;

    const wrapClasses = useClasses(`c-media-block c-block`, {
        [`c-block__${blockType}`]: blockType,
        "c-block__stacked--until-small":
            blockType && (stackedUntilSmall || preset.stackedUntilSmall),
        "c-media-block--reversed": blockType && isReversed, // TODO: Ask how reverse clases work in ALPS?
        "c-block--reversed": blockType && isReversed,
    })

    return (
        <div className={`${wrapClasses} ${preset.block ? preset.block : ""}`} {...blockProps}>
            {image && (
                <MediaImage
                    className={`${preset.image ? preset.image : ""}`}
                    icon={icon}
                    asBackgroundImage={asBackgroundImage}
                    caption={imageCaption}
                    image={image}
                    url={url}
                />
            )}
            {video && (
                <div className="c-block__image-wrap">
                    <Figure videoSrc={video}/>
                </div>
            )}
            <div className={`c-block__content ${preset.content ? preset.content : ""} ${isReversed ? preset.contentReversed : ""}`}
            >
                <div className={`c-block__group u-spacing ${preset.group ? preset.group : ""}`}>
                    <div className="u-width--100p u-spacing">
                        {kicker && (
                            <h3 className="c-block__kicker u-space--quarter--bottom">
                                {kicker}
                            </h3>
                        )}
                        {title && (
                            <h3 className={`c-block__title ${kicker ? "u-space--zero" : ""} ${preset.title ? preset.title : "u-theme--color--dark u-font--primary--l"}`}>
                                <a className={`c-block__title-link ${preset.titleLink ? preset.titleLink : "u-theme--link-hover--dark"}`}
                                   href={url}>
                                    {titlePrefix && <em className={"u-theme--color--lighter"}>{titlePrefix}: </em>}
                                    {title}
                                </a>
                            </h3>
                        )}
                        {description && (
                            <p className="c-block__description">{description}</p>
                        )}
                    </div>
                    {(category || date) && (
                        <div className={`c-block__meta ${preset.meta ? preset.meta : ""}`}>
                            {category && (
                                <div className="c-block__category u-text-transform--upper">
                                    {category}
                                </div>
                            )}
                            {date && (
                                <time className="c-block__date u-text-transform--upper" dateTime={date.toString()}>
                                    <DateTimeFormat
                                        datetime={date}
                                        locales={dateLocales}
                                        format={dateFormat}
                                        style={dateStyle}
                                    />
                                </time>
                            )}
                        </div>
                    )}
                    {cta && url && (
                        <Button
                            as="a"
                            className="c-block__button"
                            icon={ctaIcon}
                            iconSize="m"
                            iconPosition={ctaIconPosition}
                            outline
                            label={cta}
                            url={url}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
