import React from 'react';

export interface CaptionProps {
    content: string
}

export const Caption = ({content}: CaptionProps): JSX.Element => {
    return (
        <div className={"o-caption u-color--gray u-font--secondary--s"}>
            {content}
        </div>
    );
}