import { Meta, StoryObj } from '@storybook/react';
import data from "./SearchFilter.stories.json";
import { SearchFilter } from "./SearchFilter";

const meta = {
  title: "molecules/forms/Search Filter",
  component: SearchFilter,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released'
  },
  tags: [ 'autodocs' ],
  argTypes: {
    filters: {
      defaultValue: data.filters,
      control: { type: "object" }
    },
    sorting: {
      defaultValue: data.sorting,
      control: { type: "object" }
    },
    placeholder: {
      defaultValue: data.placeholder,
      control: { type: "text" }
    },
    searchAgainLabel: {
      defaultValue: data.searchAgainLabel,
      control: { type: "text" }
    },
    searchLabel: {
      defaultValue: data.searchLabel,
      control: { type: "text" }
    }
  }
} satisfies Meta<typeof SearchFilter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
