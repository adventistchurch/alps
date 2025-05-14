import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

import dataSearch from '../../../molecules/forms/search/Search.stories.json';
import dataHeaderPrimary from '../../../molecules/navigation/primaryNavigation/PrimaryNavigation.stories.json';
import dataHeaderSecondary from '../../../molecules/navigation/secondaryNavigation/SecondaryNavigation.stories.json';

const meta = {
  title: 'organisms/global/Header',
  component: Header,
  tags: [ 'autodocs' ],
  argTypes: {
    logoElement: {
      options: [ 'SDA', 'SDAWithIcon', 'GAIN' ],
      control: { type: 'select' },
    },
  },
  args: {
    // @ts-ignore
    primaryNav: dataHeaderPrimary.items, // or adjust to match expected shape
    secondaryNav: {
      // @ts-ignore
      items: dataHeaderSecondary.items.map(({ text, icon, url, subnav }) => ({
        text,
        icon,
        url,
        subnav: subnav ?? undefined // ensure optionality
      }))
    },
    drawer: {
      search: {
        placeholder: dataSearch.placeholder,
        title: dataSearch.title,
        submitLabel: dataSearch.submitLabel,
      },
    },
    logoElement: 'SDA',
    usePathFill: true,
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
