import { Meta, StoryObj } from "@storybook/react";

import data from "./DrawerLinks.stories.json";
import { DrawerLinks } from "./DrawerLinks";

const meta = {
  title: "molecules/navigation/Drawer Links",
  component: DrawerLinks,
  parameters: {
    componentSubtitle: "Component",
    status: "released",
  },
  tags: [ 'autodocs' ],
  argTypes: {
    title: { control: "text" },
    items: { control: "object" },
  },
} satisfies Meta<typeof DrawerLinks>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: data.title,
    items: data.items,
  },
};
