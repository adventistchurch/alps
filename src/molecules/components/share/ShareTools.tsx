import React from 'react';
import {IconWrap} from "../../../components/icons/IconWrap";
import {shareToolsConfig} from "./_config";

export interface ShareToolsProps {
    services?: {name: string; label: string }[],
    url?: string
}

export const ShareTools = ({services = shareToolsConfig.services, url = shareToolsConfig.url}: ShareToolsProps): JSX.Element => {
    return (
        <div className="c-share-tools js-hover">
            <a href={url} className="c-share-tools__toggle o-kicker can-be--white u-theme--color--base">
                <IconWrap
                    name="share"
                    size="xs"
                    color={"base"}
                    className={"u-space--quarter--right"}
                />
                Share
            </a>
            <ul className="c-share-tools__list u-background-color--gray--light can-be--dark-dark u-padding--half u-spacing--half u-theme--border-color--darker--left">
                {services && services.map((props, key) => (
                    <ShareToolItem {...props} key={`share-${key}`}/>
                ))}
            </ul>
        </div>
    )
}

interface ShareToolItemProps {
    name?: string,
    label?: string,
    onClick?: () => void,
    url?: string
}

const ShareToolItem = ({name, label, onClick, url}: ShareToolItemProps) => {
    return (
        <li className="c-share-tools__list-item">
            <a
                className={`c-share-tools__link u-theme--color--base ${name}`}
                href={url}
                g-plusone-count="false"
                onClick={onClick}
            >
                {label}
            </a>
        </li>
    )
}