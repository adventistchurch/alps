import { Meta, StoryObj } from '@storybook/react';
import type { CommentsProps } from './Comments';
import { Comments } from './Comments';
import { Comment } from '../comment/Comment';
import data from './Comments.stories.json';
import dataComment from '../comment/Comment.stories.json';
import { iconConfig } from '../../../atoms/icons/_config';

const meta = {
  title: 'molecules/components/Comments',
  component: Comments,
  tags: [ 'autodocs' ],
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
  },
  argTypes: {
    heading: {
      defaultValue: data.heading,
      control: { type: 'text' },
    },
    icon: {
      // @ts-ignore
      options: iconConfig.iconNamesMap,
      defaultValue: 'contact',
      control: { type: 'select' },
    },
    count: {
      defaultValue: 5,
      control: { type: 'number' },
    },
  },
} satisfies Meta<typeof Comments>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args: CommentsProps) => {
    // @ts-ignore
    const content = Array.from({ length: args.count ?? 5 }, (_, i) => (
      <Comment
        key={`comment-${i}`}
        avatar={dataComment.avatar}
        byline={dataComment.byline}
        bylineLink={dataComment.bylineLink}
        date={13}
        dateFormat="datetime"
        text={dataComment.comment}
      />
    ));

    return <Comments {...args} content={content}/>;
  },
};
