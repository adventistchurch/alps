import React from 'react';
const wrapStyle = {
    paddingTop: `${(100 / 16) * 9}%`, // enforces 16:9 aspect ratio. TODO: Make this calculated based on video's original aspect ratio?
}

const iframeStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
}

export interface VideoProps {
    src: string,
    width?: number,
    height?: number
}

export const Video = ({ src, width, height}: VideoProps): JSX.Element => {
    console.log("TTT: " + width + " :: " + height);
    return (
        <div style={wrapStyle}>
            <iframe
                src={src}
                width={width}
                height={height}
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                style={iframeStyle}
            />
        </div>
    )
}
