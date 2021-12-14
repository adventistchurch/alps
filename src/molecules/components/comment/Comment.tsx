import React from "react";
import {Image} from "../../../atoms/images/Image";
import {dateFormatsMap, DateTimeFormat} from "../../../helpers/DateTimeFormat";

export interface CommentProps {
    /**
     * Specify the avatar of your Comment
     */
    avatar: string,
    /**
     * Specify the byline of your Comment
     */
    byline: string,
    /**
     * Specify the bylineLink of your Comment
     */
    bylineLink?: string,
    children?: React.ReactNode,
    /**
     * Specify the date of your Comment
     */
    date: number,
    /**
     * Specify the dateFormat of your Comment
     */
    dateFormat: keyof typeof dateFormatsMap,
    dateLocales?: [],
    /**
     * Specify the editUrl of your Comment
     */
    editUrl?: string,
    /**
     * Specify the editLabel of your Comment
     */
    editLabel?: string,
    /**
     * Specify the replyLabel of your Comment
     */
    replyLabel?: string,
    /**
     * Specify the replyUrl of your Comment
     */
    replyUrl?: string,
    /**
     * Specify the text of your Comment
     */
    text: string,
}

export const Comment = ({
                            avatar,
                            byline,
                            bylineLink,
                            date,
                            dateFormat,
                            dateLocales,
                            editUrl,
                            editLabel,
                            children,
                            text,
                            replyUrl,
                            replyLabel
                        }: CommentProps): JSX.Element => {

    console.log("DATE: " + date);

    return (
        <div className="c-comment--inner u-border--left u-space--bottom  u-theme--border-color--darker">
            <div className="c-comment__avatar u-space--right">
                <Image src={avatar} alt={byline}/>
            </div>
            <div className="c-comment__body u-spacing--quarter">
                <div className="c-comment__meta">
                    <span className={"byline u-font--secondary--s can-be--white u-theme--color--darker"}>
                        {bylineLink &&
                        <a href={bylineLink}>{byline}</a>
                        }
                    </span>
                    <span className="o-divider">|</span>
                    <span className="pub_date u-font--secondary--s u-color--gray can-be--white">
                        <DateTimeFormat
                            datetime={date}
                            format={dateFormat}
                            locales={dateLocales}
                        />
                    </span>
                    {editUrl &&
                    <span className="c-comment__edit-link u-font--secondary--s u-theme--color--base">
                            <a className="c-comment-edit-link" href={editUrl}>{editLabel}</a>
                        </span>
                    }
                </div>
                <p className="c-comment__content">{children || text}</p>
                {replyUrl &&
                <div className="c-comment__reply">
                    <a href={replyUrl} className="u-font--secondary--s u-theme--color--base">{replyLabel}</a>
                </div>
                }
            </div>
        </div>
    )
}