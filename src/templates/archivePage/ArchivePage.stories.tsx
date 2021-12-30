import React from "react";
import data from "./ArchivePage.stories.json";
import dataFilters from "../../molecules/forms/faceFilter/FacetFilter.stories.json";
import dataHeaderPrimary from "../../molecules/navigation/primaryNavigation/PrimaryNavigation.stories.json";
import dataHeaderSecondary from "../../molecules/navigation/secondaryNavigation/SecondaryNavigation.stories.json";
import dataFooterPrimary from "../../molecules/navigation/footerPrimaryNavigation/FooterPrimaryNavigation.stories.json";
import dataFooterSecondary
    from "../../molecules/navigation/footerSecondaryNavigation/FooterSecondaryNavigation.stories.json";
import {Meta, Story} from "@storybook/react";
import {ArchivePage, ArchivePageProps} from "./ArchivePage";
import {BlockWrap} from "../../organisms/asides/aside/BlockWrap";

const asideChildren = data.aside
    ? <BlockWrap type="contentBlock" title={data.aside.comments.title} linkLabel={data.aside.comments.linkLabel} linkUrl={data.aside.comments.linkUrl} items={data.aside.comments.items}/>
    : null;

export default {
    title: "templates/archivePage/ArchivePage",
    component: ArchivePage,
    argTypes: {
        filters: {
            defaultValue: dataFilters,
            control: {type: "object"}
        },
        pageHeader: {
            defaultValue: data.pageHeader,
            control: {type: "object"}
        },
        articles: {
            defaultValue: data.articles,
            control: {type: "object"}
        },
        blankTemplateProps: {
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
        aside: {
            defaultValue: asideChildren,
            control: {type: "object"}
        },
        pagination: {
            defaultValue: data.pagination,
            control: {type: "object"}
        }
    }
} as Meta;

const Template: Story<ArchivePageProps> = (args) =>
    <ArchivePage {...args}>
        {/*{demoContent(data.content.title, data.content.text)}*/}
    </ArchivePage>;
export const Basic = Template.bind({});
