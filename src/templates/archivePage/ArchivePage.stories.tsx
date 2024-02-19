import React from "react";
import data from "./ArchivePage.stories.json";
import dataFilters from "../../molecules/forms/faceFilter/FacetFilter.stories.json";
import dataHeaderPrimary from "../../molecules/navigation/primaryNavigation/PrimaryNavigation.stories.json";
import dataHeaderSecondary from "../../molecules/navigation/secondaryNavigation/SecondaryNavigation.stories.json";
import dataFooterPrimary from "../../molecules/navigation/footerPrimaryNavigation/FooterPrimaryNavigation.stories.json";
import dataFooterSecondary
    from "../../molecules/navigation/footerSecondaryNavigation/FooterSecondaryNavigation.stories.json";
import {Meta, StoryObj} from "@storybook/react";
import {ArchivePage} from "./ArchivePage";
import {BlockWrap} from "../../organisms/asides/aside/BlockWrap";

const asideChildren = data.aside
    ? <BlockWrap type="contentBlock" title={data.aside.comments.title} linkLabel={data.aside.comments.linkLabel}
                 linkUrl={data.aside.comments.linkUrl} items={data.aside.comments.items}/>
    : null;

const meta = {
    title: "templates/ArchivePage",
    component: ArchivePage,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof ArchivePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        // @ts-ignore
        filters: dataFilters,
        pageHeader: data.pageHeader,
        // @ts-ignore
        articles: data.articles,
        blankTemplateProps: {
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
            }
        },
        // @ts-ignore
        aside: asideChildren,
        // @ts-ignore
        pagination: data.pagination
    }
};
