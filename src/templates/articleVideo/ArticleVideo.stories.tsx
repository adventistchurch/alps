import React from "react";
import data from "./ArticleVideo.stories.json";
import dataHeaderPrimary from "../../molecules/navigation/primaryNavigation/PrimaryNavigation.stories.json";
import dataHeaderSecondary from "../../molecules/navigation/secondaryNavigation/SecondaryNavigation.stories.json";
import dataFooterPrimary from "../../molecules/navigation/footerPrimaryNavigation/FooterPrimaryNavigation.stories.json";
import dataFooterSecondary
    from "../../molecules/navigation/footerSecondaryNavigation/FooterSecondaryNavigation.stories.json";
import {Meta, Story} from "@storybook/react";
import {ArticleVideo, ArticleVideoProps} from "./ArticleVideo";
import {Text} from "../../atoms/text/Text";

export default {
    title: "templates/ArticleVideo",
    component: ArticleVideo,
    argTypes: {
        caption: {
            defaultValue: data.caption,
            control: {type: "text"}
        },
        src: {
            defaultValue: data.src,
            control: {type: "text"}
        },
        headerBlocks: {
            defaultValue: data.pageHeaderFuture.blocks,
            control: {type: "object"}
        },
        templateProps: {
            defaultValue: {
                header: {
                    primaryNav: dataHeaderPrimary,
                    secondaryNav: dataHeaderSecondary,
                    logoElement: "SDA"
                },
                footer: {
                    primaryNav: dataFooterPrimary,
                    secondaryNav: dataFooterSecondary
                },
                control: {type: "object"}
            }
        }
    }
} as Meta;

const Template: Story<ArticleVideoProps> = (args) =>
    <ArticleVideo {...args}>
        {demoContent(data.content.title, data.content.text)}
    </ArticleVideo>;

export const Basic = Template.bind({});

export const with_segments = Template.bind({});
with_segments.args = {
    segmentsTitle: data.segmentsTitle,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    segments: data.segments,
    duration: data.duration
}

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
