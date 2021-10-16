import React from "react";
import {Meta, Story} from '@storybook/react';
import data from "./SearchHeader.stories.json";
import {SearchHeader, SearchHeaderProps} from "./SearchHeader";

export default {
  title: "molecules/forms/Search Header",
  parameters: {
    componentSubtitle: 'Component',
    status: 'released'
  },
  component: SearchHeader,
  argTypes: {
    filters: {
      defaultValue: data.filters,
      control: {type: "object"}
    },
    placeholder: {
      defaultValue: data.placeholder,
      control: {type: "text"}
    },
    searchAgainLabel: {
      defaultValue: data.searchAgainLabel,
      control: {type: "text"}
    },
    searchLabel: {
      defaultValue: data.searchLabel,
      control: {type: "text"}
    }
  }
} as Meta;

const Template: Story<SearchHeaderProps> = (args) => <SearchHeader {...args}/>;

export const Basic = Template.bind({});

export const with_filters = Template.bind({});
with_filters.args = {
  showFilters: true
}

export const with_suggestions = Template.bind({});
with_suggestions.args = {
  suggestions: data.suggestions,
  term: "Hi"
}
