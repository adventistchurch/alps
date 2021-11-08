import React from "react";
import {Meta, Story} from "@storybook/react";
import {ArticleFooter, ArticleFooterProps} from "./ArticleFooter";

export default {
    title: "organisms/sections/Article Footer",
    component: ArticleFooter,
    argTypes: {}
} as Meta;

const Template: Story<ArticleFooterProps> = (args) =>
    <ArticleFooter {...args}>
        ArticleFooter content goes here...
    </ArticleFooter>;
export const Basic = Template.bind({});

