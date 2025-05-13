import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';
import { range } from '../../helpers/range';

const meta: Meta<typeof Image> = {
  title: 'atoms/images/Lazy',
  tags: [ 'autodocs' ],
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Lazy: Story = {
  render: () => (
    <>
      {range(10, 50).map((x, i) => (
        <Image
          key={`lazy-image-${i}`}
          lazy={true}
          src={`//picsum.photos/id/${x}1/300/200`}
          placeholderSrc={`//picsum.photos/id/${x}1/30/20`}
          width="300"
          height="200"
        />
      ))}
    </>
  ),
};
