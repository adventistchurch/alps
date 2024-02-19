import React from "react";

import {BlankTemplate, BlankTemplateProps} from "../BlankTemplate";
import {PageHeaderFeature} from "../../organisms/sections/pageHeaderFeature/PageHeaderFeature";
import {Grid} from "../../atoms/grids/Grid";
import {GridItem} from "../../atoms/grids/GridItem";
import {ListContent} from "../../organisms/content/listContent/ListContent";
import {MediaBlock, MediaBlockProps} from "../../molecules/blocks/mediaBlock/MediaBlock";
import {GridSeven} from "../../atoms/grids/GridSeven";
import {Pagination, PaginationProps} from "../../molecules/navigation/pagination/Pagination";
import {Aside} from "../../organisms/asides/aside/Aside";
import {PageHeader, PageHeaderProps} from "../../organisms/sections/pageHeader/PageHeader";
import {ImageType} from "../../atoms/images/ImageType";

export interface NewsProps {
    pageHeader?: PageHeaderProps,
    aside?: React.ReactNode,
    archive?: {
        title: string,
        linkLabel: string,
        linkUrl: string,
        content?: React.ReactNode,
        items?: {
            title: string,
            category: string,
            url: string,
            image: ImageType,
            date: number
        }[]
    },
    extendedFeatures?: {
        title: string,
        linkLabel: string,
        linkUrl: string,
        items: [],
    },
    latest?: {
        title: string,
        linkLabel: string,
        linkUrl: string,
        items?: [],
    },
    media?: {
        title: string,
        linkLabel: string,
        linkUrl: string,
        primaryItems?: MediaBlockProps[],
        secondaryItems?: [],
    },
    subscribeForm?: React.ReactNode,
    blankTemplate: BlankTemplateProps,
    pagination?: PaginationProps,
    featured?: React.ReactNode
}

export const News = ({
                         archive = {
                             title: 'Archive',
                             linkLabel: 'See all',
                             linkUrl: '#',
                         },
                         aside,
                         latest = {
                             title: 'Latest',
                             linkLabel: 'See all',
                             linkUrl: '#',
                         },
                         pageHeader,
                         featured,
                         extendedFeatures = {
                             title: 'Featured Stories',
                             linkLabel: 'See all',
                             linkUrl: '#',
                             items: []
                         },
                         media = {
                             title: 'Media',
                             linkLabel: 'See all',
                             linkUrl: '#',
                         },
                         pagination,
                         subscribeForm,
                         blankTemplate
                     }: NewsProps): JSX.Element => {
    return (
        <BlankTemplate {...blankTemplate}>
            <div>
                {pageHeader && <PageHeader {...pageHeader} />}
                {featured && (
                    <PageHeaderFeature
                        asBackgroundImage
                        // @ts-ignore
                        {...featured}
                        blockType="featureWide"
                    />
                )}
            </div>

            <Grid className={"u-spacing--double--until-large l-grid l-grid--7-col l-grid-wrap l-grid-wrap--6-of-7"}
                  seven={true} as="section" wrap={"6"}>
                <GridItem className={"u-padding--zero--sides"} sizeAtL={"4"}>
                    {extendedFeatures?.items?.length > 0 && (
                        <ListContent
                            className={"u-padding--right"}
                            title={extendedFeatures.title}
                            linkLabel={extendedFeatures.linkLabel}
                            linkUrl={extendedFeatures.linkUrl}
                        >
                            {extendedFeatures.items &&
                                extendedFeatures.items.map((item, key) => (
                                    <MediaBlock
                                        key={`extended-featured-item-${key}`}
                                        type="featuredNews"
                                        // @ts-ignore
                                        {...item}
                                    />
                                ))}
                        </ListContent>
                    )}
                    <ListContent
                        title={latest.title}
                        linkLabel={latest.linkLabel}
                        linkUrl={latest.linkUrl}
                        className={"u-padding--right"}
                    >
                        {latest.items &&
                            latest.items.map((item, key) => (
                                <MediaBlock
                                    key={`featured-item-${key}`}
                                    type="featuredNews"
                                    // @ts-ignore
                                    {...item}
                                />
                            ))}
                    </ListContent>
                    {pagination && (
                        <div className={"u-padding--double--top"}>
                            <Pagination {...pagination} />
                        </div>
                    )}
                </GridItem>

                {aside && (
                    <GridItem sizeAtL={"2"} className={"u-padding--zero--sides"}>
                        <Aside>{aside}</Aside>
                    </GridItem>
                )}
            </Grid>

            <ListContent
                title={media.title}
                linkLabel={media.linkLabel}
                linkUrl={media.linkUrl}
            >
                {media.primaryItems && media.primaryItems.length > 0 && (
                    <Grid seven={true} as="section" wrap={"6"} className={"u-spacing--double--until-large"}>
                        <GridItem className={"u-padding--zero--sides"}>
                            {media.primaryItems.map((item, key) => (
                                <MediaBlock
                                    key={`media-content-${key}`}
                                    asBackgroundImage
                                    type="mediaContent"
                                    {...item}
                                />
                            ))}
                        </GridItem>
                    </Grid>
                )}

                {media.secondaryItems && media.secondaryItems.length > 0 && (
                    <Grid as="section" blockRow={true} seven={true} wrap={"6"}
                          className={"u-spacing--double--until-large l-grid l-grid--7-col l-section__block-row l-section__block-row--6-col l-grid-wrap l-grid-wrap--6-of-7"}>
                        <GridItem className={"u-padding--zero--sides u-flex"}>
                            {media.secondaryItems.map((item, key) => (
                                <MediaBlock
                                    key={`media-row-${key}`}
                                    type="mediaRow"
                                    // @ts-ignore
                                    {...item}
                                />
                            ))}
                        </GridItem>
                    </Grid>
                )}
            </ListContent>
            <GridSeven as="section"
                       className={"l-grid l-grid--7-col l-grid-wrap--6-of-7 u-shift--left--1-col--at-large"}>
                <GridItem className={"c-article u-spacing--triple l-grid-item l-grid-item--l--4-col"}>
                    {subscribeForm}
                    {archive && (
                        <ListContent
                            title={archive.title}
                            linkLabel={archive.linkLabel}
                            linkUrl={archive.linkUrl}
                        >
                            {archive.items &&
                                archive.items.map(
                                    ({title, category, url, image, date}, key) => (
                                        <MediaBlock
                                            key={`archive-item-${key}`}
                                            title={title}
                                            category={category}
                                            url={url}
                                            image={image}
                                            type="archiveHome"
                                            date={date}
                                        />
                                    )
                                )}
                        </ListContent>
                    )}
                </GridItem>
            </GridSeven>
        </BlankTemplate>
    )
}
