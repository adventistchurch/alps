import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import {PageContent} from "./PageContent";

import data from "./PageContent.stories.json";

const meta = {
    title: "organisms/content/Page Content",
    component: PageContent,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof PageContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        // @ts-ignore
        breadcrumbs: data.items
    }
};
