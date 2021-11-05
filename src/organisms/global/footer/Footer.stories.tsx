import React from "react";
import {Meta, Story} from "@storybook/react";

import data from "./Footer.stories.json";
import dataFooterPrimary from "./../../../molecules/navigation/footerPrimaryNavigation/FooterPrimaryNavigation.stories.json";
import dataFooterSecondary from "./../../../molecules/navigation/footerSecondaryNavigation/FooterSecondaryNavigation.stories.json";
import {Footer, FooterProps} from "./Footer";

export default {
    title: "organisms/global/Footer",
    component: Footer,
    argTypes: {
        address: {
            defaultValue: data.address,
            control: {type: "object"}
        },
        copyright: {
            defaultValue: data.copyright,
            control: {type: "text"}
        },
        text: {
            defaultValue: data.text,
            control: {type: "text"}
        },
        primaryNav: {
            defaultValue: dataFooterPrimary,
            control: {type: "object"}
        },
        secondaryNav: {
            defaultValue: dataFooterSecondary,
            control: {type: "object"}
        }
    }
} as Meta;

const Template: Story<FooterProps> = (args) =>
    <Footer {...args}/>;
export const Basic = Template.bind({});
