import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import {Article} from "./Article";
import data from "../article/Article.stories.json";
import dataHeaderPrimary from "../../molecules/navigation/primaryNavigation/PrimaryNavigation.stories.json";
import dataHeaderSecondary from "../../molecules/navigation/secondaryNavigation/SecondaryNavigation.stories.json";
import dataFooterPrimary from "../../molecules/navigation/footerPrimaryNavigation/FooterPrimaryNavigation.stories.json";
import dataFooterSecondary
    from "../../molecules/navigation/footerSecondaryNavigation/FooterSecondaryNavigation.stories.json";
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
    title: "templates/Article",
    component: Article,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof Article>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {

        headerType: "featureHalf",
        // @ts-ignore
        blocks: data.blocks,
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
            }
        },
        children: demoContent(data.content.title, data.content.text)
    }
};

export const with_related: Story = {
    args: {
        ...Basic.args,
        // @ts-ignore
        relatedPosts: data.relatedPosts
    }
};
