import React from 'react';

export interface IntroProps {
    content?: string,
    children: React.ReactNode
}

export const Intro = ({content, children}: IntroProps): JSX.Element => {
    return (
        <p className={"o-intro text"}>
            {children || content}
        </p>
    );
}