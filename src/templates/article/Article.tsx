import React from "react";
import {ArticleContent} from "../../organisms/content/articleContent/ArticleContent";
import {PageHeaderFeature} from "../../organisms/sections/pageHeaderFeature/PageHeaderFeature";
import {RelatedPosts} from "../../organisms/asides/relatedPosts/RelatedPosts";
import {Main} from "../Main";
import {TemplateWrap, TemplateWrapProps} from "../TemplateWrap";

export const headerTypes = ['featureHalf', 'featureWide', 'longform']

export interface ArticleProps {
    children?: React.ReactNode,
    content?: React.ReactNode,
    headerType: "featureHalf" | "featureWide" | "longform",
    blocks?: [],
    relatedTitle?: string,
    relatedPosts?: [],
    templateProps: TemplateWrapProps
}

export const Article = ({
                            children,
                            content,
                            headerType,
                            blocks,
                            relatedTitle,
                            relatedPosts,
                            templateProps
                        }: ArticleProps): JSX.Element => {
    return (
        <TemplateWrap {...templateProps}>
            <Main>
                <PageHeaderFeature
                    blockType={headerType ? headerType : 'longform'}
                    blocks={blocks}
                />
                <ArticleContent
                    sidebar={
                        relatedPosts &&
                        relatedPosts.length > 0 && (
                            <RelatedPosts heading={relatedTitle} blocks={relatedPosts}/>
                        )
                    }
                >
                    {content || children}
                </ArticleContent>
            </Main>
        </TemplateWrap>
    )
}
