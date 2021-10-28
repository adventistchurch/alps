import React from "react";
import {InlineStyles} from "../../../helpers/InlineStyles";
import {Icon} from "../../../components/icons/Icon";
import {iconConfig} from "../../../components/icons/_config";

export interface SabbathProps {
    backgroundImage?: string,
    showLogo?: boolean,
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
