import React from "react";

export interface ArticleFooterProps {
    children?: React.ReactNode
}

export const ArticleFooter = ({children}: ArticleFooterProps): JSX.Element => {
    return (
        <footer className="c-article__footer u-padding--left">
            {children}
        </footer>
    )
}
