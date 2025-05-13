import type { Meta, StoryObj } from '@storybook/react';
import { ArticleFooter } from './ArticleFooter';

const meta = {
  title: 'organisms/sections/Article Footer',
  component: ArticleFooter,
  tags: [ 'autodocs' ],
  argTypes: {},
} satisfies Meta<typeof ArticleFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <ArticleFooter {...args}>
      ArticleFooter content goes here...
    </ArticleFooter>
  ),
};
