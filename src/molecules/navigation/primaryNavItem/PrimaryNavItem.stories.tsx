import type { Meta, StoryObj } from '@storybook/react';
import { PrimaryNavItem } from './PrimaryNavItem';
import { PrimaryNavBase } from '../primaryNavigation/PrimaryNavigation';
import data from './PrimaryNavItem.stories.json';

const HeaderSimulator = ({ children }: { children?: React.ReactNode }) => (
  <div className="c-header">
    <div className="c-header__nav-primary">
      <PrimaryNavBase>{children}</PrimaryNavBase>
    </div>
  </div>
);

const meta = {
  title: 'molecules/navigation/Primary Navigation Item',
  component: PrimaryNavItem,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
  },
  decorators: [
    (Story) => <HeaderSimulator><Story/></HeaderSimulator>,
  ],
  argTypes: {
    text: {
      defaultValue: data.text,
      control: { type: 'text' },
    },
    url: {
      defaultValue: data.url,
      control: { type: 'text' },
    },
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof PrimaryNavItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    text: data.text,
    url: data.url,
  },
};

export const with_subMenu: Story = {
  args: {
    text: data.text,
    url: data.url,
    // @ts-ignore
    subnav: data.subnav,
  },
};
