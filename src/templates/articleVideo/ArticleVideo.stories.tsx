import React from "react";
import data from "./ArticleVideo.stories.json";
import dataHeaderPrimary from "../../molecules/navigation/primaryNavigation/PrimaryNavigation.stories.json";
import dataHeaderSecondary from "../../molecules/navigation/secondaryNavigation/SecondaryNavigation.stories.json";
import dataFooterPrimary from "../../molecules/navigation/footerPrimaryNavigation/FooterPrimaryNavigation.stories.json";
import dataFooterSecondary
    from "../../molecules/navigation/footerSecondaryNavigation/FooterSecondaryNavigation.stories.json";
import {Meta, StoryObj} from "@storybook/react";
import {ArticleVideo} from "./ArticleVideo";
import {Text} from "../../atoms/text/Text";

/* Note: This is just a simple demo content. */
const demoContent = (title: string, text: string) => {
    const paragraphs = text.split('\n');
    return paragraphs.map((pText, k) => (
        <Text key={k} hasDropcap={k === 0}>
            <h2>{title}</h2>
            <p>{pText}</p>
        </Text>
    ))
}

const meta = {
    title: "templates/ArticleVideo",
    component: ArticleVideo,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof ArticleVideo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        caption: data.caption,
        src: data.src,
        // @ts-ignore
        headerBlocks: data.pageHeaderFuture.blocks,
        templateProps: {
            header: {
                // @ts-ignore
                primaryNav: dataHeaderPrimary,
                // @ts-ignore
                secondaryNav: dataHeaderSecondary,
                logoElement: "SDA"
            },
            footer: {
                // @ts-ignore
                primaryNav: dataFooterPrimary,
                secondaryNav: dataFooterSecondary
            },
        },
        children: demoContent(data.content.title, data.content.text)
    }
};

export const with_segments: Story = {
    args: {
        ...Basic.args,
        // @ts-ignore
        segments: data.segments,
        duration: data.duration
    }
}
