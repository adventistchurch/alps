import data from "./ArticleVideo.stories.json";
import dataHeaderPrimary from "../../molecules/navigation/primaryNavigation/PrimaryNavigation.stories.json";
import dataHeaderSecondary from "../../molecules/navigation/secondaryNavigation/SecondaryNavigation.stories.json";
import dataFooterPrimary from "../../molecules/navigation/footerPrimaryNavigation/FooterPrimaryNavigation.stories.json";
import dataFooterSecondary
  from "../../molecules/navigation/footerSecondaryNavigation/FooterSecondaryNavigation.stories.json";

import type { Meta, StoryObj } from "@storybook/react";
import type { ArticleVideoProps } from "./ArticleVideo"; // Make sure this type exists and is correct
import { ArticleVideo } from "./ArticleVideo";
import { Text } from "../../atoms/text/Text";

/* Note: This is just a simple demo content. */
const demoContent = (title: string, text: string) => {
  const paragraphs = text.split('\n');
  return paragraphs.map((pText, k) => (
    <Text key={k} hasDropcap={k === 0}>
      <h2>{title}</h2>
      <p>{pText}</p>
    </Text>
  ));
};

const meta: Meta<typeof ArticleVideo> = {
  title: "templates/ArticleVideo",
  component: ArticleVideo,
  argTypes: {},
  tags: [ 'autodocs' ],
};

export default meta;

type Story = StoryObj<ArticleVideoProps>;

export const Basic: Story = {
  args: {
    caption: data.caption,
    src: data.src,
    headerBlocks: data.pageHeaderFuture.blocks as ArticleVideoProps["headerBlocks"],

    templateProps: {
      header: {
        primaryNav: dataHeaderPrimary as ArticleVideoProps["templateProps"]["header"]["primaryNav"],
        secondaryNav: dataHeaderSecondary as unknown as ArticleVideoProps["templateProps"]["header"]["secondaryNav"],
        logoElement: "SDA",
      },
      footer: {
        primaryNav: {
          text: "Footer nav",
          ...dataFooterPrimary,
        },
        secondaryNav: dataFooterSecondary as ArticleVideoProps["templateProps"]["footer"]["secondaryNav"],
      },
      sabbath: {
        showLogo: true,
        backgroundImage: 'https://via.placeholder.com/800x400',
      },
    },
    children: demoContent(data.content.title, data.content.text),
  },
};

export const with_segments: Story = {
  args: {
    ...Basic.args,
    segments: data.segments as ArticleVideoProps["segments"],
    duration: data.duration,
  },
};
