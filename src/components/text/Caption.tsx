import React from 'react';

export interface CaptionProps {
    /**
     * Caption content
     */
    content: string
}

export const Caption = ({content = "Caption content"}: CaptionProps): JSX.Element => {
    return (
        <div className={"o-caption u-color--gray u-font--secondary--s"}>
            {content}
        </div>
    );
}