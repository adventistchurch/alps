import React from 'react';

export interface FooterPrimaryNavigationProps {
    text: string,
    items?: { text: string, className?: string, onClick?: () => void, url: string }[]
}

export const FooterPrimaryNavigation = ({items = []}: FooterPrimaryNavigationProps): JSX.Element => {
    return (
        <div className={"u-padding u-theme--background-color--darker"}>
            <nav className="c-footer__primary-nav__list u-spacing--half">
                {items.map(({text, url, className, onClick}, key) => (
                    <a
                        href={url}
                        className={`c-footer__primary-nav__link u-link--white u-theme--link-hover--light ${className}`}
                        key={`footer-nav-link-${key}`}
                        onClick={onClick}
                    >
                        <strong>{text}</strong>
                    </a>
                ))}
            </nav>
        </div>
    )
}
