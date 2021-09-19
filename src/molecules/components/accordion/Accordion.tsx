import React from 'react';
import {AccordionItem} from "./AccordionItem";
import renderItems from "../../../helpers/renderItems";

export interface AccordionProps {
    className?: string,
    items?: [],
    children?: React.ReactNode
}

export const Accordion = ({className = "", items, children}: AccordionProps): JSX.Element => {
    return (
        <div className={`c-accordion u-spacing u-position--relative ${className}`}>
            {Array.isArray(items) ? renderItems(items, AccordionItem, "") : children}
        </div>
    )
}