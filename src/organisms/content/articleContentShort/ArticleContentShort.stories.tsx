import type { Meta, StoryObj } from '@storybook/react';
import { ArticleContentShort } from './ArticleContentShort';
import { RelatedPosts } from '../../asides/relatedPosts/RelatedPosts';
import relatedPostsData from '../../asides/relatedPosts/RelatedPosts.stories.json';

const meta = {
  title: 'organisms/content/Article Content Short',
  component: ArticleContentShort,
  tags: [ 'autodocs' ],
  argTypes: {
    spacing: {
      control: { type: 'select' },
      options: [ 'none', 'single', 'double' ],
    },
  },
  args: {
    spacing: 'double',
  },
} satisfies Meta<typeof ArticleContentShort>;

export default meta;

type Story = StoryObj<typeof meta>;

const content = (
  <>
    <p>
      <strong>Lorem</strong> ipsum dolor sit amet, consectetur adipiscing elit.{' '}
      <a href="https://adventist.org">Donec malesuada</a>, est ut viverra euismod, dui dolor gravida
      massa, sed aliquam ex nisl ut metus...
    </p>
    <p>
      <a href="https://adventist.org">
        Vestibulum ipsum orci, egestas eu erat non, posuere maximus quam.
      </a>{' '}
      Quisque tincidunt turpis id accumsan hendrerit...
    </p>
  </>
);

const commentSection = (
  <footer className="c-article__footer u-padding--left">
    <a href="#" className="c-social-tools__comment">Comment</a>
  </footer>
);

export const Basic: Story = {
  render: (args) => (
    <ArticleContentShort {...args}>
      {content}
      {commentSection}
    </ArticleContentShort>
  ),
};

export const WithDropcap: Story = {
  ...Basic,
  args: {
    hasDropcap: true,
  },
};

export const WithSidebar: Story = {
  render: (args) => (
    // @ts-ignore
    <ArticleContentShort {...args} sidebar={<RelatedPosts blocks={relatedPostsData.blocks}/>}>
      {content}
      {commentSection}
    </ArticleContentShort>
  ),
};
