import React from "react";

export interface VersionProps {
    type?: "default" | "full"
}

const versionStyles = {
    fontFamily: "Nunito Sans, -apple-system, \".SFNSText-Regular\", \"San Francisco\", BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
    color: "#333333",
    fontSize: "1em !important",
    fontWeight: 200,
    lineHeight: "1.6em !important",
};

export const Version = ({type = "default"}: VersionProps): JSX.Element => {

    let version: JSX.Element;

    switch (type) {
        case "full":
            version = <div>
                <p style={versionStyles}>Version ALPS Library        <span style={{fontWeight: "bolder"}}>{process.env.ALPS_LIBRARY_VERSION}</span></p>
                <p style={versionStyles}>Version ALPS Library STYLES <span style={{fontWeight: "bolder"}}>{process.env.ALPS_LIBRARY_STYLES_VERSION}</span></p>
            </div>;
            break;
        default:
            version = <>{process.env.ALPS_LIBRARY_STYLES_VERSION}</>
    }

    return version;
}