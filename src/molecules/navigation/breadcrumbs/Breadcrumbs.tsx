import React from 'react';

import {IconWrap} from "../../../atoms/icons/IconWrap";
import renderItems from "../../../helpers/renderItems";

export interface BreadcrumbItemProps {
    text: string,
    url?: string
}

export const BreadcrumbItem = ({ text, url }: BreadcrumbItemProps): JSX.Element => {
    return (
        <li className="c-breadcrumbs__list-item u-color--gray u-font--secondary--s u-text-transform--upper u-display--inline-block">
            <IconWrap name="arrow-bracket-right" size="xs" color={"gray"} />
            <strong>
                {url ? (
                    <a className="c-breadcrumbs__link can-be--white" href={url}>
                        {text}
                    </a>
                ) : (
                    text
                )}
            </strong>
        </li>
    )
}

export interface BreadcrumbsProps {
    items?: []
}

export const Breadcrumbs = ({ items = [] }: BreadcrumbsProps): JSX.Element => {
    return (
        <>
            {
                items.length > 0 && (
                    <nav className="c-breadcrumbs" role="navigation">
                        <ul className="c-breadcrumbs__list">
                            {renderItems(items, BreadcrumbItem, "")}
                        </ul>
                    </nav>
                )
            }
        </>
    )
}
