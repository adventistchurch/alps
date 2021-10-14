import React from "react";
import {Meta, Story} from '@storybook/react'
import data from "./FacetFilter.stories.json";
import {FacetFilter, FacetFilterProps} from "./FacetFilter";

export default {
    title: "molecules/forms/Face Filter",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: FacetFilter,
    argTypes: {
        title: {
            defaultValue: data.title,
            control: {type: "text"}
        },
        facets: {
            defaultValue: data.facets,
            control: {type: "object"}
        }
    }
} as Meta;

const Template: Story<FacetFilterProps> = (args) => <FacetFilter {...args}/>;

export const Basic = Template.bind({});
