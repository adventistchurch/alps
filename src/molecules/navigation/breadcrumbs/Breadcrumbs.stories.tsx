import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "./Breadcrumbs";
import data from "./Breadcrumbs.stories.json";

const meta = {
  title: "molecules/navigation/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    componentSubtitle: "Component",
    status: "released",
  },
  tags: [ "autodocs" ],
  argTypes: {
    items: { control: "object" },
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    // @ts-ignore
    items: data.items,
  },
};
