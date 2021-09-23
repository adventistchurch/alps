import React from 'react';
import {Accordion} from "../accordion/Accordion";
import {AccordionItem} from "../accordion/AccordionItem";
import {iconConfig} from "../../../components/icons/_config";

export interface CommentsProps {
    heading?: React.ReactNode,
    content?: React.ReactNode,
    icon?: keyof typeof iconConfig.iconNamesMap,
    expanded?: boolean,
    onChange?: () => void
}

export const Comments = ({heading = "Comments", content, expanded = false, icon = "contact", onChange}: CommentsProps): JSX.Element => {
    return (
        <Accordion>
            <AccordionItem
                heading={heading}
                content={content}
                icon={icon}
                open={expanded}
                onChange={onChange}
            />
        </Accordion>
    )
}