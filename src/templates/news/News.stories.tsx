import React from "react";

import data from "./News.stories.json";
import dataHeaderPrimary from "../../molecules/navigation/primaryNavigation/PrimaryNavigation.stories.json";
import dataHeaderSecondary from "../../molecules/navigation/secondaryNavigation/SecondaryNavigation.stories.json";
import dataFooterPrimary from "../../molecules/navigation/footerPrimaryNavigation/FooterPrimaryNavigation.stories.json";
import dataFooterSecondary
    from "../../molecules/navigation/footerSecondaryNavigation/FooterSecondaryNavigation.stories.json";
import {Meta, StoryObj} from "@storybook/react";
import {News} from "./News";
import {Aside} from "../../organisms/asides/aside/Aside";
import {BlockWrap} from "../../organisms/asides/aside/BlockWrap";
import asideData from "../../organisms/asides/aside/Aside.stories.json";

const aside =
    <Aside>
        <BlockWrap type="mediaBlock" title={asideData.media.title} linkLabel={asideData.media.linkLabel}
                   linkUrl={asideData.media.linkUrl} items={asideData.media.items}/>
        <BlockWrap type="contentBlock" title={asideData.comments.title} linkLabel={asideData.comments.linkLabel}
                   linkUrl={asideData.comments.linkUrl} items={asideData.comments.items}/>
    </Aside>;

const meta = {
    title: "templates/News",
    component: News,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof News>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        aside: aside,
        pageHeader: data.pageHeader,
        // @ts-ignore
        featured: data.featured,
        // @ts-ignore
        latest: data.latest,
        media: {title: data.media.title, linkLabel: data.media.linkLabel, linkUrl: data.media.linkUrl},
        // @ts-ignore
        archive: data.archive,
        blankTemplate: {
            templateProps: {
                header: {
                    logoElement: "SDA",
                    // @ts-ignore
                    primaryNav: dataHeaderPrimary,
                    // @ts-ignore
                    secondaryNav: dataHeaderSecondary
                },
                footer: {
                    // @ts-ignore
                    primaryNav: dataFooterPrimary,
                    secondaryNav: dataFooterSecondary
                },
                sabbath: {
                    showLogo: true
                }
            }
        },
    }
};

export const no_header: Story = {
    args: {
        ...Basic.args,
        blankTemplate: {
            templateProps: {
                header: {
                    logoElement: "SDA",
                    // @ts-ignore
                    primaryNav: {},
                    // @ts-ignore
                    secondaryNav: {}
                },
                footer: {
                    // @ts-ignore
                    primaryNav: dataFooterPrimary,
                    secondaryNav: dataFooterSecondary
                },
                sabbath: {
                    showLogo: true
                }
            }
        },
    }
};

export const no_aside: Story = {
    args: {
        ...Basic.args,
        aside: <></>
    }
};

export const with_pagination: Story = {
    args: {
        ...Basic.args,
        // @ts-ignore
        pagination: data.pagination
    }
};
