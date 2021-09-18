import React from 'react';
import useToggle from "../../../helpers/useToggle";
import {Button} from "../../../components/button/Button";

export interface ContentBlockExpandProps {
    title: string,
    kicker?: string,
    description?: string
}

export const ContentBlockExpand = ({title, kicker, description}: ContentBlockExpandProps): JSX.Element => {
    const {onToggle, openClass} = useToggle();

    return (
        <div
            className={`c-block c-block c-block__expand u-background-color--gray--light u-border--left u-theme--border-color--darker--left can-be--dark-dark ${openClass}`}>
            <div className="c-block__header">
                <div className="c-block__title u-padding">
                    <h2 className="u-font--primary--s u-theme--color--darker">
                        {kicker &&
                        <span className="u-theme--color--base">
                                <em>{kicker}</em>
                            </span>
                        }
                        {title}
                    </h2>
                    <div className="c-block__toggle">
                        <Button
                            outline={true}
                            small={true}
                            toggle={true}
                            onClick={onToggle}
                            icon={"plus"}
                        />
                    </div>
                </div>
            </div>
            <div className="c-block__body u-padding u-padding--zero--top u-spacing">
                <p>{description}</p>
            </div>
        </div>
    )
}