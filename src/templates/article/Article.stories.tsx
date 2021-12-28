import React from "react";
import {Meta, Story} from "@storybook/react";
import {Article, ArticleProps} from "./Article";
import data from "../article/Article.stories.json";
import dataHeaderPrimary from "../../molecules/navigation/primaryNavigation/PrimaryNavigation.stories.json";
import dataHeaderSecondary from "../../molecules/navigation/secondaryNavigation/SecondaryNavigation.stories.json";
import dataFooterPrimary from "../../molecules/navigation/footerPrimaryNavigation/FooterPrimaryNavigation.stories.json";
import dataFooterSecondary
    from "../../molecules/navigation/footerSecondaryNavigation/FooterSecondaryNavigation.stories.json";
import {Text} from "../../atoms/text/Text";

export default {
    title: "templates/article/Article",
    component: Article,
    argTypes: {
        headerType: {
            defaultValue: "featureHalf",
            control: {type: "select"}
        },
        blocks: {
            defaultValue: data.blocks,
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
                }
            },
            control: {type: "object"}
        }
    }
} as Meta;

const Template: Story<ArticleProps> = (args) =>
    <Article {...args}>
        {demoContent(data.content.title, data.content.text)}
    </Article>;
export const Basic = Template.bind({});

export const with_related = Template.bind({});
with_related.args = {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    relatedPosts: data.relatedPosts
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
