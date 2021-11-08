import React from "react";
import {HeadingBlock} from "../../../molecules/blocks/headingBlock/HeadingBlock";
import {CommentForm} from "../../../molecules/forms/commentForm/CommentForm";
import {Comment} from "../../../molecules/components/comment/Comment";

// Note: This component allows more that one level replies. ALPS doesn"t contemplate that.
export interface CommentsListProps {
    level?: number,
    items?: [],
    areReplies?: boolean
}

const CommentsList = ({items = [], level = 0, areReplies = false}: CommentsListProps): JSX.Element => {
    const childrenClass = level > 0 ? "children__" : ""
    const listClass = `c-comment__${childrenClass}list`
    const itemClass = `${listClass}-item`

    return (
        <ul className={listClass + " u-spacing"}>
            {items.map(({byline, replies, date, text, avatar, dateFormat}, key) => (
                <li className={`${itemClass} comment  u-spacing`} key={`comment-${key}`}>
                    <Comment byline={byline} date={date} text={text} avatar={avatar} dateFormat={dateFormat}/>
                    {replies && <CommentsList items={replies} level={level + 1}/>}
                </li>
            ))}
        </ul>
    )
}

export interface CommentsProps {
    items?: [],
    title: string
}

export const Comments = ({items = [], title}: CommentsProps): JSX.Element => {
    return (
        <section className="c-comments u-spacing--double">
            <HeadingBlock title={title}/>
            <CommentsList items={items} level={0}/>
            <CommentForm/> {/* TODO: Set CommentForm props here...*/}
        </section>
    )
}
