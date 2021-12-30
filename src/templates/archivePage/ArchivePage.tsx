import React from "react";
import {PageHeaderLong, PageHeaderLongProps} from "../../organisms/sections/pageHeaderLong/PageHeaderLong";
import {GridSeven} from "../../atoms/grids/GridSeven";
import {GridItem} from "../../atoms/grids/GridItem";
import {BlockFeed} from "../../organisms/sections/blockFeed/BlockFeed";
import {Pagination, PaginationProps} from "../../molecules/navigation/pagination/Pagination";
import {BreakoutBlock, BreakoutBlockProps} from "../../molecules/blocks/breackoutBlock/BreakoutBlock";
import {ListContent} from "../../organisms/content/listContent/ListContent";
import {FacetFilter, FacetFilterProps} from "../../molecules/forms/faceFilter/FacetFilter";
import {Text} from "../../atoms/text/Text";
import {BlankTemplate, BlankTemplateProps} from "../BlankTemplate";
import {AsideProps} from "../../organisms/asides/aside/Aside";

export interface ArchivePageProps {
    aside?: AsideProps,
    breakout?: BreakoutBlockProps,
    articles?: [],
    articleCta?: React.ReactNode,
    filters: FacetFilterProps,
    pageHeader: PageHeaderLongProps,
    pagination?: PaginationProps,
    blankTemplateProps: BlankTemplateProps
}

export const ArchivePage = ({
                                articles = [],
                                aside,
                                breakout,
                                filters,
                                pageHeader,
                                pagination,
                                blankTemplateProps
                            }: ArchivePageProps): JSX.Element => {
    const {title: filtersTitle, ...filtersProps} = filters

    return (
        <BlankTemplate {...blankTemplateProps}>
            <PageHeaderLong {...pageHeader} />

            <GridSeven
                className="l-main__content u-padding--zero--sides u-spacing--double--until-xxlarge l-grid l-grid--7-col l-grid-wrap--6-of-7 u-shift--left--1-col--at-xxlarge"
                id="top"
                as="section"
            >
                <GridItem className="c-article" sizeAtL="4" sizeAtXL="3">
                    <Text
                        as="article"
                        className="c-article__body u-space--top"
                        hasDropcap={false}
                        spacing={"double"}
                    >
                        <GridItem
                            className={"u-spacing--double u-no-gutters u-shift--right--1-col--at-large l-grid-item--5-col l-grid-item--l--4-col l-grid-item--xl--3-col"}>
                            <BlockFeed
                                blocks={articles}
                                blocksType="archivePage"
                                // blocksProps={articleProps}
                                // spacing="double"
                            />
                            {pagination && <Pagination {...pagination} />}
                        </GridItem>
                    </Text>
                </GridItem>

                <div
                    className="c-sidebar u-padding--zero--sides u-spacing l-grid-item l-grid-item--l--2-col l-grid-item--xl--2-col"
                >
                    <div className={"u-padding--right u-spacing--double"}>
                        {breakout && <BreakoutBlock {...breakout} />}
                        <ListContent title={filtersTitle}>
                            <FacetFilter {...filtersProps} />
                        </ListContent>
                        {aside}
                    </div>
                </div>
            </GridSeven>
        </BlankTemplate>
    )
}
