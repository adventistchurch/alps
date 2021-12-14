import React from 'react';

export interface IntroProps {
    /**
     * In addition to this field, in which the content is passed, the component also supports `children (ReactNode)` nodes,
     * i.e. the component can act as a `wrapper`,
     * while checking whether the `wrapper` component is present or not will be performed first.
     */
    content?: string,
    children?: React.ReactNode
}

export const Intro = ({content, children}: IntroProps): JSX.Element => {
    return (
        <p className={"o-intro text"}>
            {children || content}
        </p>
    );
}