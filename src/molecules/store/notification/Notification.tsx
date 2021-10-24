import React from "react";

export interface NotificationProps {
    content?: string
}

export const Notification = ({content}: NotificationProps): JSX.Element => {
    return (
        <div className="c-store-notification c-store-notification--warning c-store-notification--small-notification">
            <div className="c-store-notification__wrap">
                <div className="c-store-notification__content">
                    <div className="c-store-notification__header">
                        <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <title>o-icon__warning</title>
                            <path fillRule="evenodd" clipRule="evenodd" d="M5 3L2 9H8L5 3Z" stroke="#717171"
                                  strokeWidth="2"/>
                        </svg>
                        <span>warning</span>
                    </div>
                    <div className="c-store-notification__text">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    )
}