import type { Meta, StoryObj } from '@storybook/react';
import { Intro } from './Intro';
import { ComponentsTypes } from '../../global/commons';

const meta = {
  title: 'atoms/Texts/Intro',
  component: Intro,
  tags: [ 'autodocs' ],
  parameters: {
    componentSubtitle: ComponentsTypes.COMPONENT + ComponentsTypes.CAN_BE_USE_AS_WRAPPER,
  },
  argTypes: {
    content: {
      control: { type: 'text' },
    },
  },
  args: {
    content:
      'A block quotation is a quotation in a written document, that is set off from the main text as a paragraph, or block of text, and typically distinguished visually using indentation and a different typeface or smaller size quotation.',
  },
} satisfies Meta<typeof Intro>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const WithChildren: Story = {
  render: () => (
    <Intro>
      Some Tag <a href="https://google.com">Google link</a>
    </Intro>
  ),
};
