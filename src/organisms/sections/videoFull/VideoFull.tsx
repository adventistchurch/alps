import React from "react";
import {YouTubeType} from "./YouTubeType";

export interface VideoFullProps {
    srcVideo: YouTubeType
}

export const VideoFull = ({srcVideo}: VideoFullProps): JSX.Element => {

    return (
        <section id="QPNxmEviUOg" className="c-section c-section__video-full c-video-full js-video js-toggle">
            <div className="c-video-full__video fitvid u-gradient--bottom">
                <div className="fluid-width-video-wrapper" >
                <iframe style={{width: "100%", height: "400px"}} src={srcVideo.src} frameBorder={srcVideo.frameBorder} allowFullScreen={true}
                        allow={srcVideo.allow}
                        />
                </div>
            </div>
            <div className="c-video-full__content">
                <span className="u-icon u-icon--xl u-space--right u-path-fill--white"><svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.56 15"><title>icon-play</title><path
                    d="M10.56,7.5,0,15V0Z" fill="#231f20"/></svg></span>
                <div className="u-color--white">
                    <h3 className="u-font--primary--l">
                        <strong className="js-video-title"/>
                    </h3>
                    <strong className="u-font--secondary--s js-video-duration"/>
                </div>
            </div>
        </section>

    )
}