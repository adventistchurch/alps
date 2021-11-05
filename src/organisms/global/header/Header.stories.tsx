import React from "react";
import {Meta, Story} from "@storybook/react";
import dataSearch from "./../../../molecules/forms/search/Search.stories.json";
import dataHeaderPrimary from "./../../../molecules/navigation/primaryNavigation/PrimaryNavigation.stories.json";
import dataHeaderSecondary from "./../../../molecules/navigation/secondaryNavigation/SecondaryNavigation.stories.json";
import {Header, HeaderProps} from "./Header";

export default {
    title: "organisms/global/Header",
    component: Header,
    argTypes: {
        primaryNav: {
            defaultValue: dataHeaderPrimary,
            control: {type: "object"}
        },
        secondaryNav: {
            defaultValue: dataHeaderSecondary,
            control: {type: "object"}
        },
        drawer: {
            defaultValue: {
                search: {
                    placeholder: dataSearch.placeholder,
                    title: dataSearch.title,
                    submitLabel: dataSearch.submitLabel
                }
            },
            control: {type: "object"}
        },
        logoElement: {
            defaultValue: "SDA",
            options: ["SDA", "SDAWithIcon", "GAIN"],
            control: {type: "select"}
        }
    }
} as Meta;

const Template: Story<HeaderProps> = (args) =>
    <Header {...args}/>;
export const Basic = Template.bind({});
