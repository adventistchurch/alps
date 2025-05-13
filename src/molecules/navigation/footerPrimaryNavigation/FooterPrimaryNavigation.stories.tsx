import { Meta, StoryObj } from "@storybook/react";

import data from "./FooterPrimaryNavigation.stories.json";
import { FooterPrimaryNavigation } from "./FooterPrimaryNavigation";

const meta = {
  title: "molecules/navigation/Footer Primary Navigation",
  component: FooterPrimaryNavigation,
  parameters: {
    componentSubtitle: "Component",
    status: "released",
  },
  tags: [ 'autodocs' ],
  argTypes: {
    text: { control: "text" },
    items: { control: "object" },
  },
} satisfies Meta<typeof FooterPrimaryNavigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    text: "Some text",
    items: data.items,
  },
};
