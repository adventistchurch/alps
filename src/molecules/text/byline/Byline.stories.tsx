import type { Meta, StoryObj } from "@storybook/react";
import { Byline } from "./Byline";
import data from "./Byline.stories.json";

const meta = {
  title: "molecules/text/Byline",
  component: Byline,
  tags: [ "autodocs" ],
  argTypes: {
    value: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Byline>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    value: data.textValue,
  },
};
