import React from 'react'

export interface DrawerLinksItem {
    text?: string,
    url?: string
}

export interface DrawerLinksProps {
    /**
     * Specify the title of your  DrawerLinks
     */
    title?: string,
    items?: DrawerLinksItem[]
}

export const DrawerLinks = ({title, items = [{text: "", url: ""}]}: DrawerLinksProps): JSX.Element => {
    return (
        <div className={"u-spacing--half"}>
            <h3 className={"u-font--secondary--s u-text-transform--upper u-font-weight--bold"}>
                {title}:
            </h3>

            <p className={"u-spacing--half"}>
                {items.map(({text, url}, i) => (
                    <a href={url} className={"u-link--white"} key={`${url}-${i}`}>
                        {text}
                    </a>
                ))}
            </p>
        </div>
    )
}
