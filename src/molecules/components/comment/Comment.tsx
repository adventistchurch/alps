import React from "react";
import {Image} from "../../../components/images/Image";
import {dateFormatsMap, DateTimeFormat} from "../../../helpers/DateTimeFormat";

export interface CommentProps {
    avatar: string,
    byline: string,
    bylineLink?: string,
    children?: React.ReactNode,
    date: number,
    dateFormat: keyof typeof dateFormatsMap,
    dateLocales?: [],
    editUrl?: string,
    editLabel?: string,
    replyLabel?: string,
    replyUrl?: string,
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