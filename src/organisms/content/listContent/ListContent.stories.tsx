import React from "react";
import {Meta, Story} from "@storybook/react";
import {ListContent, ListContentProps} from "./ListContent";

import data from "./ListContent.stories.json";
import renderItems from "../../../helpers/renderItems";
import {MediaBlock} from "../../../molecules/blocks/mediaBlock/MediaBlock";

export default {
    title: "organisms/content/List Content",
    component: ListContent,
    argTypes: {}
} as Meta;

const Template: Story<ListContentProps> = (args) =>
    <ListContent {...args}>
        {data.items &&
            renderItems(data.items, MediaBlock, "")
        }
    </ListContent>;
export const Basic = Template.bind({});

export const with_pagination = Template.bind({});
with_pagination.args = {
    pagination: data.pagination
}
