import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import data from "./RelatedPosts.stories.json";
import {RelatedPosts} from "./RelatedPosts";
import {CheckoutPlace} from "../../../molecules/store/checkoutPlace/CheckoutPlace";

const meta = {
    title: "organisms/aside/Related Posts",
    component: RelatedPosts,
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof CheckoutPlace>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        heading: data.heading,
        linkText: data.linkText,
        url: data.url,
        // @ts-ignore
        blocks: data.blocks
    }
};

