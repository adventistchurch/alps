import React from "react";

import data from "./BasicPage.stories.json";
import dataBreakoutBlock from "../../molecules/blocks/breackoutBlock/BreakoutBlock.stories.json";
import dataHeaderPrimary from "../../molecules/navigation/primaryNavigation/PrimaryNavigation.stories.json";
import dataHeaderSecondary from "../../molecules/navigation/secondaryNavigation/SecondaryNavigation.stories.json";
import dataFooterPrimary from "../../molecules/navigation/footerPrimaryNavigation/FooterPrimaryNavigation.stories.json";
import pageHeaderLong from "../../organisms/sections/pageHeaderLong/PageHeaderLong.stories.json";
import dataFooterSecondary
    from "../../molecules/navigation/footerSecondaryNavigation/FooterSecondaryNavigation.stories.json";
import {Meta, StoryObj} from "@storybook/react";
import {BasicPage} from "./BasicPage";
import {Aside} from "../../organisms/asides/aside/Aside";
import {BlockWrap} from "../../organisms/asides/aside/BlockWrap";
import asideData from "../../organisms/asides/aside/Aside.stories.json";

const defaultContent =
    <>
        <div className={"text has-drop-cap u-spacing"}>
            <h1>{data.content.title1}</h1>
            {/* Tests how hasDropcap behaves with empty spaces and inline/nested tag elements */}
            <p>
                <strong>
                    {'  '}
                    <em>
                        <span>
                        <a href="#">
                          <span aria-label="Lorem">
                            <span
                                className="o-drop-cap u-theme--background-color--base"
                                style={{fontWeight: "normal"}}
                            >
                              L
                            </span>
                            <span hidden={true}>L</span>
                            orem
                          </span>
                        </a>
                      </span>
                    </em> Ipsum
                </strong>
                . {data.content.text1}. <a href="#">This is a link</a>, and here is the
                rest of text.
            </p>
        </div>
        <div className={"text u-spacing"}>
            <h2>{data.content.title2}</h2>
            <p>
                {data.content.text2} <a href="#">This is a link</a>, and here is the rest
                of text.
            </p>
            <h3>{data.content.title3}</h3>
            <p>{data.content.text2}</p>
        </div>
        <div className={"text u-spacing"}>
            <h3>{data.content.title3}</h3>
            <p>
                <strong>Aperiam veritatis dolore.</strong>{' '}
                <a href="#">Mollitia repudiandae ipsa</a> {data.content.text3}
            </p>
            <h3>{data.content.title2}</h3>
        </div>
    </>;

const meta = {
    title: "templates/BasicPage",
    component: BasicPage,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof BasicPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        pageHeader: {
            "kicker": pageHeaderLong.kicker,
            "title": pageHeaderLong.title,
            "subtitle": pageHeaderLong.subtitle,
            "url": pageHeaderLong.url,
        },
        content: defaultContent,
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
    }
};

export const with_background: Story = {
    args: {
        ...Basic.args,
        pageHeader: pageHeaderLong
    }
}

const aside =
    <Aside>
        <BlockWrap type="mediaBlock" title={asideData.media.title} linkLabel={asideData.media.linkLabel}
                   linkUrl={asideData.media.linkUrl} items={asideData.media.items}/>
        <BlockWrap type="contentBlock" title={asideData.comments.title} linkLabel={asideData.comments.linkLabel}
                   linkUrl={asideData.comments.linkUrl} items={asideData.comments.items}/>
    </Aside>;


export const with_sideBar: Story = {
    args: {
        ...Basic.args,
        breakout: dataBreakoutBlock,
        aside: aside
    }
}

export const with_asides: Story = {
    args: {
        ...Basic.args,
        aside: aside
    }
}
