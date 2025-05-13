import type { Meta, StoryObj } from '@storybook/react';
import { PrimaryNavigation } from './PrimaryNavigation';
import data from './PrimaryNavigation.stories.json';

const HeaderSimulator = ({ children }: { children?: React.ReactNode }) => (
  <div className="c-header">
    <div className="c-header__nav-primary">{children}</div>
  </div>
);

const meta: Meta<typeof PrimaryNavigation> = {
  title: 'molecules/navigation/Primary Navigation',
  component: PrimaryNavigation,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
  },
  decorators: [
    (Story) => (
      <HeaderSimulator>
        <Story/>
      </HeaderSimulator>
    ),
  ],
  argTypes: {},
  tags: [ 'autodocs' ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    // @ts-ignore
    items: data.items,
  },
};
