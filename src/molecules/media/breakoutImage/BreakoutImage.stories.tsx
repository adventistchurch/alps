import { Meta, StoryObj } from "@storybook/react";
import data from "./BreakoutImage.stories.json";
import { BreakoutImage } from "./BreakoutImage";

const meta = {
  title: "molecules/media/Breakout Image",
  component: BreakoutImage,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released'
  },
  tags: [ 'autodocs' ],
  argTypes: {
    caption: {
      control: { type: "text" }
    },
    srcSet: {
      control: { type: "object" }
    },
    parallax: {
      control: { type: "boolean" }
    }
  }
} satisfies Meta<typeof BreakoutImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    caption: data.caption,
    srcSet: data.srcSet
  }
};

export const with_parallax: Story = {
  args: {
    ...Basic.args,
    parallax: true
  }
};
