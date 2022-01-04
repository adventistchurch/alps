import React from "react";

import {Main} from "../Main";
import {TemplateWrap, TemplateWrapProps} from "../TemplateWrap";
import {PageHeaderFeature} from "../../organisms/sections/pageHeaderFeature/PageHeaderFeature";
import {GridSeven} from "../../atoms/grids/GridSeven";
import {GridItem} from "../../atoms/grids/GridItem";
import {ArticleContentShort} from "../../organisms/content/articleContentShort/ArticleContentShort";
import {ContentBlock} from "../../molecules/blocks/contentBlock/ContentBlock";
import {HeadingBlock} from "../../molecules/blocks/headingBlock/HeadingBlock";
import {BlockFeed} from "../../organisms/sections/blockFeed/BlockFeed";
import {ImageType} from "../../atoms/images/ImageType";
import {Figure} from "../../molecules/media/figure/Figure";

export interface ArticleVideoProps {
    content?: React.ReactNode,
    children?: React.ReactNode,
    duration?: string,
    durationLabel?: string,
    image?: ImageType,
    headerBlocks?: [],
    segments?: [],
    segmentsTitle?: string,
    src: string,
    caption?: string,
    templateProps: TemplateWrapProps
}

export const ArticleVideo = ({
                                 children,
                                 caption,
                                 content,
                                 duration,
                                 durationLabel = "Duration",
                                 segments,
                                 segmentsTitle = "Program Segments",
                                 headerBlocks,
                                 src,
                                 templateProps
                             }: ArticleVideoProps): JSX.Element => {
    return (
        <TemplateWrap {...templateProps}>
            <Main>
                <PageHeaderFeature
                    blockType="longform"
                    blocks={headerBlocks}
                />
                <GridSeven
                    as="section"
                    className={"u-padding--zero--sides u-spacing--double--until-large l-grid l-grid--7-col l-grid-wrap--6-of-7 u-shift--left--1-col--at-xxlarge"}
                >
                    <GridItem className="c-article" sizeAtL="5" sizeAtXL="4">
                        <Figure videoSrc={src} caption={caption}/>
                    </GridItem>
                </GridSeven>
                <ArticleContentShort
                    sidebar={
                        duration && (
                            <ContentBlock description={`${durationLabel}: ${duration}`} dateFormat={"datetime"}/>
                        )
                    }
                >
                    {content || children}
                </ArticleContentShort>
                {segments && segments.length > 0 && (
                    <>
                        <HeadingBlock title={segmentsTitle}/>
                        <BlockFeed blocks={segments} blocksType="video" grid gridNoWrap/>
                    </>
                )}
            </Main>
        </TemplateWrap>
    )
}
