import React from "react";

import {Meta, Story} from "@storybook/react";
import dataHeaderPrimary from "../molecules/navigation/primaryNavigation/PrimaryNavigation.stories.json";
import dataHeaderSecondary from "../molecules/navigation/secondaryNavigation/SecondaryNavigation.stories.json";
import dataFooterPrimary from "../molecules/navigation/footerPrimaryNavigation/FooterPrimaryNavigation.stories.json";
import dataFooterSecondary
    from "../molecules/navigation/footerSecondaryNavigation/FooterSecondaryNavigation.stories.json";
import {TemplateWrap, TemplateWrapProps} from "./TemplateWrap";

export default {
    title: "templates/TemplateWrap",
    component: TemplateWrap,
    argTypes: {
        header: {
            defaultValue: {
                primaryNav: dataHeaderPrimary,
                secondaryNav: dataHeaderSecondary,
                logoElement: "SDA"
            },
            control: {type: "object"}
        },
        footer: {
            defaultValue: {
                primaryNav: dataFooterPrimary,
                secondaryNav: dataFooterSecondary
            },
            control: {type: "object"}
        }
    }
} as Meta;

const Template: Story<TemplateWrapProps> = (args) =>
    <TemplateWrap {...args}/>;
export const Basic = Template.bind({});