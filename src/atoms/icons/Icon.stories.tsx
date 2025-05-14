import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta = {
  title: 'atoms/Icon',
  component: Icon,
  tags: [ 'autodocs' ],
  argTypes: {},
  parameters: {
    viewport: {
      defaultViewport: 'custom',
      viewports: {
        custom: {
          name: 'Custom',
          styles: {
            width: '500px',
            height: '500px',
          },
        },
      },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultIcon: Story = {
  args: {
    name: 'logo',
  },
};

export const ArrowBrackets: Story = {
  args: {
    name: 'arrow-bracket-left',
  },
};

export const ArrowLongBrackets: Story = {
  args: {
    name: 'arrow-long-left',
  },
};

export const ArrowShortBrackets: Story = {
  args: {
    name: 'arrow-short-left',
  },
};

export const Logos: Story = {
  args: {
    name: 'logo',
  },
};

export const Close: Story = {
  args: {
    name: 'close',
  },
};

export const Contacts: Story = {
  args: {
    name: 'contact',
  },
};

export const Dots: Story = {
  args: {
    name: 'dots',
  },
};

export const Language: Story = {
  args: {
    name: 'language',
  },
};

export const Legal: Story = {
  args: {
    name: 'language',
  },
};

export const Plus: Story = {
  args: {
    name: 'plus',
  },
};

export const Search: Story = {
  args: {
    name: 'search',
  },
};

export const Settings: Story = {
  args: {
    name: 'settings',
  },
};

export const Share: Story = {
  args: {
    name: 'share',
  },
};

export const Subscribe: Story = {
  args: {
    name: 'subscribe',
  },
};
