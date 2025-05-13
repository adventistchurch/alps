import type { Meta, StoryObj } from '@storybook/react';
import { Caption } from './Caption';
import { ComponentsTypes } from '../../global/commons';

const meta = {
  title: 'atoms/Texts/Caption',
  component: Caption,
  tags: [ 'autodocs' ],
  parameters: {
    componentSubtitle: ComponentsTypes.COMPONENT,
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
} satisfies Meta<typeof Caption>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
