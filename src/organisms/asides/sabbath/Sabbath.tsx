import React from "react";
import {InlineStyles} from "../../../helpers/InlineStyles";
import {Icon} from "../../../atoms/icons/Icon";
import {iconConfig} from "../../../atoms/icons/_config";

export interface SabbathProps {
    /**
     * Specify the backgroundImage of your Sabbath
     */
    backgroundImage?: string,
    /**
     * Specify whether the Sabbath should be a showLogo variant
     */
    showLogo?: boolean,
    /**
     * Specify an `icon` to include in the logo through an string (name of the icon) representing the SVG data of the icon, similar to the `Icon` component
     */
    logo?: keyof typeof iconConfig.iconNamesMap
}

export const Sabbath = ({backgroundImage, showLogo = true, logo = "logo"}: SabbathProps): JSX.Element => {

    return (
        <aside
            className={`l-wrap__sabbath l-sabbath ${
                backgroundImage ? 'u-background-image--sabbath' : ''
            }`}
        >
            {backgroundImage ? (
                <>
                    <InlineStyles
                        styles={`.u-background-image--sabbath { background-image: url('${backgroundImage}') !important; }`}
                    />
                    {showLogo && (
                        <div className="l-sabbath__logo u-path-fill--white">
                            <Icon name={logo}/>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <div className="l-sabbath__logo">
                        {showLogo && (
                            <div className={`l-sabbath__logo--inner `}>
                                <div className="l-sabbath__logo-light u-theme--path-fill--base">
                                    <Icon name={logo}/>
                                </div>
                                <div className="l-sabbath__logo-dark u-path-fill--white">
                                    <Icon name={logo}/>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="l-sabbath__overlay u-theme--background-color--base" style={{opacity: -1.61227}}/>
                </>
            )}
        </aside>
    )
}
