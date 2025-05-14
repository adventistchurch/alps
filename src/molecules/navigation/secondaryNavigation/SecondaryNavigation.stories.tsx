import type { Meta, StoryObj } from '@storybook/react';
import { SecondaryNavigation } from './SecondaryNavigation';
import data from './SecondaryNavigation.stories.json';

interface HeaderSimulatorProps {
  enabled?: boolean;
  children?: React.ReactNode;
}

const HeaderSimulator = ({ enabled = false, children }: HeaderSimulatorProps): JSX.Element =>
  enabled ? (
    <div className="c-header">
      <div className="c-header__nav-secondary">{children}</div>
    </div>
  ) : (
    children as JSX.Element
  );

const meta = {
  title: 'molecules/navigation/Secondary Navigation',
  component: SecondaryNavigation,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
  },
  argTypes: {},
  tags: [ 'autodocs' ],
} satisfies Meta<typeof SecondaryNavigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    // @ts-ignore
    items: data.items,
  },
};

export const with_header: Story = {
  ...Basic,
  decorators: [
    (Story) => <HeaderSimulator enabled><Story/></HeaderSimulator>,
  ],
};

export const without_menu_and_search_toggles: Story = {
  args: {
    ...Basic.args,
    showMenu: false,
    showSearch: false,
  },
  decorators: [
    (Story) => <HeaderSimulator enabled><Story/></HeaderSimulator>,
  ],
};
