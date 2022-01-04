import React from "react";
import {TemplateWrap, TemplateWrapProps} from "../TemplateWrap";
import {Main} from "../Main";
import {PageHeaderLong, PageHeaderLongProps} from "../../organisms/sections/pageHeaderLong/PageHeaderLong";
import {PageContent} from "../../organisms/content/pageContent/PageContent";
import {BreakoutBlock, BreakoutBlockProps} from "../../molecules/blocks/breackoutBlock/BreakoutBlock";
import {RelatedPosts, RelatedPostsProps} from "../../organisms/asides/relatedPosts/RelatedPosts";
import {Aside} from "../../organisms/asides/aside/Aside";

export interface BasicPageProps {
    /**
     * Specify aside inside sideBar
     */
    aside?: React.ReactNode,
    /**
     * Specify breakout inside sideBar
     */
    breakout?: BreakoutBlockProps,
    content?: React.ReactNode,
    breadcrumbs?: [],
    pageHeader: PageHeaderLongProps,
    /**
     * Specify relatedPosts inside sideBar
     */
    relatedPosts: RelatedPostsProps,
    /**
     * This component can me as a wrapper
     */
    children?: React.ReactNode,

    templateProps: TemplateWrapProps
}

export const BasicPage = ({
                              aside,
                              breadcrumbs = [],
                              breakout,
                              children,
                              content,
                              pageHeader,
                              relatedPosts,
                              templateProps
                          }: BasicPageProps): JSX.Element => {
    const hasSidebar = aside || breakout || relatedPosts;

    return (
        <TemplateWrap {...templateProps}>
            <Main>
                <PageHeaderLong {...pageHeader} />
                <section
                    className={`l-main__content u-padding--zero--sides u-spacing--double--until-xxlarge l-grid l-grid--7-col l-grid-wrap l-grid-wrap--6-of-7 
                        u-shift--left--1-col--at-${hasSidebar ? "xxlarge" : "large"}`}
                    id="top"
                >
                    <section
                        className={`c-article l-grid-item l-grid-item--l--4-col ${hasSidebar ? "l-grid-item--xl--3-col" : ""}`}
                    >
                        <div className="c-article__body">
                            {content ? (
                                <PageContent breadcrumbs={breadcrumbs}>{content}</PageContent>
                            ) : (
                                children
                            )}
                        </div>
                    </section>
                    {hasSidebar && (
                        <div
                            className={"c-sidebar u-padding--zero--sides u-spacing l-grid-item l-grid-item--l--2-col l-grid-item--xl--2-col"}>
                            {breakout && <BreakoutBlock {...breakout} />}
                            {aside && <Aside>{aside}</Aside>}
                            {relatedPosts && <RelatedPosts {...relatedPosts} />}
                        </div>
                    )}
                </section>
            </Main>
        </TemplateWrap>
    )
}
