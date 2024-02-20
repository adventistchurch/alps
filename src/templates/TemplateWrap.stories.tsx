import React from "react";

import {Meta, StoryObj} from "@storybook/react";
import dataHeaderPrimary from "../molecules/navigation/primaryNavigation/PrimaryNavigation.stories.json";
import dataHeaderSecondary from "../molecules/navigation/secondaryNavigation/SecondaryNavigation.stories.json";
import dataFooterPrimary from "../molecules/navigation/footerPrimaryNavigation/FooterPrimaryNavigation.stories.json";
import dataFooterSecondary
    from "../molecules/navigation/footerSecondaryNavigation/FooterSecondaryNavigation.stories.json";
import {TemplateWrap} from "./TemplateWrap";

const meta = {
    title: "templates/TemplateWrap",
    component: TemplateWrap,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof TemplateWrap>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
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
};