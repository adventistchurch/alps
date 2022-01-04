import React from "react";

import data from "./News.stories.json";
import dataHeaderPrimary from "../../molecules/navigation/primaryNavigation/PrimaryNavigation.stories.json";
import dataHeaderSecondary from "../../molecules/navigation/secondaryNavigation/SecondaryNavigation.stories.json";
import dataFooterPrimary from "../../molecules/navigation/footerPrimaryNavigation/FooterPrimaryNavigation.stories.json";
import dataFooterSecondary
    from "../../molecules/navigation/footerSecondaryNavigation/FooterSecondaryNavigation.stories.json";
import {Meta, Story} from "@storybook/react";
import {News, NewsProps} from "./News";
import {Aside} from "../../organisms/asides/aside/Aside";
import {commentsAside, mediaAside} from "../../organisms/asides/aside/Aside.stories";

const aside =
    <Aside>
        {mediaAside}
        {commentsAside}
    </Aside>;

export default {
    title: "templates/News",
    component: News,
    argTypes: {
        featured: {
            defaultValue: data.featured,
            control: {type: "object"}
        },
        latest: {
            defaultValue: data.latest,
            control: {type: "object"}
        },
        media: {
            defaultValue: data.media,
            control: {type: "object"}
        },
        archive: {
            defaultValue: data.archive,
            control: {type: "object"}
        },
        blankTemplate: {
            defaultValue: {
                templateProps: {
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
        },
    }
} as Meta;

const Template: Story<NewsProps> = (args) =>
    <News {...args}/>;

export const Basic = Template.bind({});
Basic.args = {
    pageHeader: data.pageHeader,
    aside: aside,
    media: {title: data.media.title, linkLabel: data.media.linkLabel, linkUrl: data.media.linkUrl}
}

export const no_header = Template.bind({});
no_header.args = {
    aside: aside
}

export const no_aside = Template.bind({});
no_aside.args = {
    pageHeader: data.pageHeader,
}

export const with_pagination = Template.bind({});
with_pagination.args = {
    pageHeader: data.pageHeader,
    aside: aside,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    pagination: data.pagination
}

