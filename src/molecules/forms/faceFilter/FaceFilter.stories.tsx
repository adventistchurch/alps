import React from "react";
import {Meta, StoryObj} from '@storybook/react'
import data from "./FacetFilter.stories.json";
import {FacetFilter} from "./FacetFilter";

const meta = {
    title: "molecules/forms/Face Filter",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: FacetFilter,
    argTypes: {}
} satisfies Meta<typeof FacetFilter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        title: data.title,
        // @ts-ignore
        facets: data.facets
    }
};
