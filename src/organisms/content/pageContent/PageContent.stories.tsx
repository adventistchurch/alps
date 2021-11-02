import React from "react";
import {Meta, Story} from "@storybook/react";
import {PageContent, PageContentProps} from "./PageContent";

import data from "./PageContent.stories.json";

export default {
    title: "organisms/content/Page Content",
    component: PageContent,
    argTypes: {
      breadcrumbs: {
        defaultValue: data.items,
        control: {type: "object"}
      }
    }
} as Meta;

const Template: Story<PageContentProps> = (args) =>
    <PageContent {...args}>Body content goes here...</PageContent>;
export const Basic = Template.bind({});
