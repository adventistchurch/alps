import React from "react";

import data from "./BasicPage.stories.json";
import dataBreakoutBlock from "../../molecules/blocks/breackoutBlock/BreakoutBlock.stories.json";
import dataHeaderPrimary from "../../molecules/navigation/primaryNavigation/PrimaryNavigation.stories.json";
import dataHeaderSecondary from "../../molecules/navigation/secondaryNavigation/SecondaryNavigation.stories.json";
import dataFooterPrimary from "../../molecules/navigation/footerPrimaryNavigation/FooterPrimaryNavigation.stories.json";
import pageHeaderLong from "../../organisms/sections/pageHeaderLong/PageHeaderLong.stories.json";
import dataFooterSecondary
    from "../../molecules/navigation/footerSecondaryNavigation/FooterSecondaryNavigation.stories.json";
import {Meta, Story} from "@storybook/react";
import {BasicPage, BasicPageProps} from "./BasicPage";
import {Aside} from "../../organisms/asides/aside/Aside";
import {commentsAside, mediaAside} from "../../organisms/asides/aside/Aside.stories";

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

export default {
    title: "templates/BasicPage",
    component: BasicPage,
    argTypes: {
        pageHeader: {
            defaultValue: {
                "kicker": pageHeaderLong.kicker,
                "title": pageHeaderLong.title,
                "subtitle": pageHeaderLong.subtitle,
                "url": pageHeaderLong.url,
            },
            control: {type: "object"}
        },
        content: {
            defaultValue: defaultContent,
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

const Template: Story<BasicPageProps> = (args) =>
    <BasicPage {...args}/>;

export const Basic = Template.bind({});

export const with_background = Template.bind({});
with_background.args = {
    pageHeader: pageHeaderLong
}

const aside =
    <Aside>
        {mediaAside}
        {commentsAside}
    </Aside>;

export const with_sideBar = Template.bind({});
with_sideBar.args = {
    breakout: dataBreakoutBlock,
    aside: aside
}

export const with_asides = Template.bind({});
with_asides.args = {
    aside: aside
}