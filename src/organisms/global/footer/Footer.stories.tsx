import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

import data from './Footer.stories.json';
import dataFooterPrimary
  from '../../../molecules/navigation/footerPrimaryNavigation/FooterPrimaryNavigation.stories.json';
import dataFooterSecondary
  from '../../../molecules/navigation/footerSecondaryNavigation/FooterSecondaryNavigation.stories.json';

const meta = {
  title: 'organisms/global/Footer',
  component: Footer,
  tags: [ 'autodocs' ],
  argTypes: {},
  args: {
    address: data.address,
    copyright: data.copyright,
    text: data.text,
    // @ts-ignore
    primaryNav: dataFooterPrimary,
    secondaryNav: dataFooterSecondary,
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
