import React from 'react';
import {Accordion} from "../accordion/Accordion";
import {AccordionItem} from "../accordion/AccordionItem";
import {iconConfig} from "../../../atoms/icons/_config";

export interface CommentsProps {
    heading?: React.ReactNode,
    content?: React.ReactNode,
    /**
     * Specify an `icon` to include in the Comments through an string (name of the icon) representing the SVG data of the icon, similar to the `Icon` component
     */
    icon?: keyof typeof iconConfig.iconNamesMap,
    /**
     * Specify whether the Comments should be an expanded variant
     */
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